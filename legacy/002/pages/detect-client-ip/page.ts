import { codeSnippet } from "../../components/code-snippet.js";
import { stringToPath } from "../../converters/string-to-path.js";
import * as m from "../../html-markup/html-elements.js";
import * as s from "../../html-markup/non-html-elements.js";
import { highlight } from "../../render/highlight.js";
import type { TPartialPage } from "../../types/partial-page.js";
import { socialCardImageUri } from "./social-network-cover.jpg.js";

export const HowToDetectClientIpPage: TPartialPage = {
  content: [
    m.p(
      s.safe(`Pretty often, your server app needs to know the IP address of
      a client making the HTTP request. For either securing the session,
      or tracking, or geolocating or any other reasonable purpose. All the
      programming languages give you their options to do that:`),
    ),
    m.p(
      codeSnippet("java", "String clientIp = request.getRemoteAddr();", [
        m.strong(s.safe("Java")),
        s.safe(" (via "),
        m.code(highlight("java", "HttpServletRequest")),
        s.safe("):"),
      ]),
    ),
    m.p(
      codeSnippet("php", "$clientIp = $_SERVER['REMOTE_ADDR'];", [
        m.strong(s.safe("PHP")),
        s.safe(" (via the "),
        m.code(highlight("php", "$_SERVER")),
        s.safe(" superglobal):"),
      ]),
    ),
    m.p(
      codeSnippet(
        "javascript",
        "const clientIp = request.connection.remoteAddress;",
        [
          m.strong(s.safe("NodeJs")),
          s.safe(" (via the Express "),
          m.code(highlight("js", "request")),
          s.safe(" object):"),
        ],
      ),
    ),
    m.p(
      codeSnippet(
        "js",
        `
(req, res) => {
    const clientIp = res.socket.remoteAddress;
}
`,
        [
          s.safe("Pure "),
          m.strong(s.safe("NodeJs")),
          s.safe(" (via the "),
          m.code(highlight("js", "http.createServer()")),
          s.safe("'s callback):"),
        ],
      ),
    ),
    m.p([
      s.safe(`As you can see, the server, listening to a socket in your app,
      knows its direct client address and ready to share it with you. This
      always works pretty well on your machine and gives you proper results:
      you'd either see the local `),
      m.code(highlight("bash", "127.0.0.1")),
      s.safe(` address, or, if you run the app in a docker container, it'd be
      the docker host machine address `),
      m.code(highlight("bash", "::ffff:172.17.0.1")),
      s.safe(` or smth.`),
    ]),
    m.p(
      s.safe(`Most of the internet guides stop at this point, as if that was it.
      But the interesting part comes when you deploy that on production.`),
    ),
    m.p(
      s.unsafe(`Nobody wants to take care of load balancing, bot attack
      protection, caching and serving SSL certificates in their code every time.
      That's why your app on production is always deployed behind a
      ${m.em(s.unsafe("load balancer"))}, that serves requests of a
      ${m.em(s.unsafe("cache manager"))}, that sits behind a
      ${m.em(s.unsafe("firewall"))}, etc. And all those smart internet
      providers, hiding their client networks by chains of
      ${m.em(s.unsafe("proxy-servers"))}... What one IP from those is visible
      to your app? Its direct client – the
      ${m.em(s.unsafe("load balancer"))}, in this case.`),
    ),
    m.p(
      s.unsafe(`Wait a minute! Does that mean, the client IP vanished into
      oblivion? ${m.br()}
      Luckily, not.`),
    ),
    m.p(
      s.unsafe(`By convention, every
      ${m.em(s.safe("proxy / firewall / load balancing server"))}
      should append an additional header to the request and store its client IP
      there. You can find a lot of suggestions in the Internet, to take
      the header called ${m.code(highlight("bash", "X-Forwarded-For"))} as
      the client IP address. But that is just half true, which is worse than
      a lie.`),
    ),
    m.p(
      s.unsafe(`In fact, the ${m.code(highlight("bash", "X-Forwarded-For"))}
      header may contain the full chain of proxies, and its format is
      a comma-separated list:`),
    ),
    m.p(
      codeSnippet(
        "bash",
        "<client-ip>, <proxy1-ip>, <proxy2-ip>, ..., <proxyN-ip>",
      ),
    ),
    m.p(
      s.safe(`So, knowing that, we're ready to get the client IP address
      in a proper way:`),
    ),
    m.p(
      codeSnippet(
        "java",
        `
public String getClientIp(HttpServletRequest request)
{
    String clientIp = request.getHeader('X-Forwarded-For');
    if (clientIp != null)
    {
        clientIp = trim(clientIp.split(',')[0]);
        if (isValidIp(clientIp))
        {
            return clientIp;
        }
    }
  
    return request.getRemoteAddr();
}
    `,
        s.unsafe(`${m.strong(s.safe("Java"))} (via
        ${m.code(highlight("java", "HttpServletRequest"))}):`),
      ),
    ),
    m.p(
      codeSnippet(
        "php",
        `
public function getClientIp() {
    // Note the header name format
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $clientIp = trim($ips[0]);
        if (isValidIp($clientIp)) {
            return $clientIp;
        }
    }

    return $_SERVER['REMOTE_ADDR'];
}
    `,
        s.unsafe(`${m.strong(s.safe("PHP"))} (via the
        ${m.code(highlight("php", "$_SERVER"))} superglobal):`),
      ),
    ),
    m.p(
      codeSnippet(
        "js",
        `
const getClientIp = (request) => {
    // header names are in lowercase
    if (request.headers['x-forwarded-for']) {
        const clientIp = request.headers['x-forwarded-for'].split(',')[0].trim();
        if (isValidIp(clientIp)) {
            return clientIp;
        }
    }

    return request.connection.remoteAddress;
}
      `,
        s.unsafe(`${m.strong(s.safe("NodeJs"))} (via the Express
        ${m.code(highlight("js", "request"))} object):`),
      ),
    ),
    m.p(
      s.unsafe(
        `Note, that there is a method ${m.code(highlight("js", "isValidIp()"))}
        used in every snippet; all languages provide their own tools for such
        a validation. Every time you get an IP from a request header, it must
        be validated, since it's almost the same as a user input and can
        contain anything. If the IP is not valid, better to fall back to
        the ${m.code(highlight("js", "remoteAddress"))} approach, or any string
        constant of your choice, like
        ${m.code(highlight("bash", '"127.0.0.1"'))} or
        ${m.code(highlight("bash", '"::1"'))}.`,
      ),
    ),
    m.p(s.safe(`Is that all? Are those snippets gonna work now?`)),
    m.p(
      s.unsafe(`Well, yes. If you're lucky and your proxy servers are properly
      configured to follow the convention and store the client IP in the
      ${m.code(highlight("bash", "X-Forwarded-For"))} header. If you can
      configure them or ask someone to do that for you, always prefer
      that way.`),
    ),
    m.p(
      s.unsafe(`Otherwise, you’ll have to experiment in the target environment
      and start listing all the request headers. There you may find a whole zoo
      of them being appended. They can be called
      ${m.code(highlight("bash", "X-Real-IP"))},
      ${m.code(highlight("bash", "Client-Real-IP"))},
      ${m.code(highlight("bash", "pRO-X-yEnCipHereDNAme-Client-IP"))}, etc.
      Actually those names are only limited by their server owner's imagination.
      If you'd like (or you have to), you can take those headers into
      consideration too:`),
    ),
    m.p(
      codeSnippet(
        "js",
        `
// ...
const weirdHeaderNames = [ // order by priority
    'x-real-ip',
    'client-real-ip',
    // ...
]
foreach (headerName in weirdHeaderNames) {
    if (headerExists(headerName)) {
        clientIp = extractIpFromHeader(headerName);
        if (isValidIp(clientIp)) {
            return clientIp
        }
    }
}
// ...
      `,
      ),
    ),
    m.p(
      s.unsafe(`Translate this to your favorite programming language and
      put after checking the ${m.code(highlight("bash", "X-Forwarded-For"))}
      header and before returning the default value at the end of the method.
      And don't forget to add a big comment explaining those headers and
      the sources where they are coming from. Otherwise, the next developer
      will never know what can be kept and what should be thrown away.`),
    ),
    m.p(
      s.unsafe(`For the future, you may consider processing also
      the ${m.code(highlight("bash", "Forwarded"))} header, that was proposed
      in 2014 but not actively used IRL yet. Probably, due to its complexity
      and overload:`),
    ),
    m.p(
      codeSnippet(
        "bash",
        "Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43",
        s.unsafe(
          `2014, ${m.a(s.safe("https://tools.ietf.org/html/rfc7239"), {
            href: "https://tools.ietf.org/html/rfc7239",
          })}`,
        ),
      ),
    ),
  ],
  createdAt: new Date("2020-01-17"),
  path: stringToPath("how-to-get-the-client-ip-address-in-your-app"),
  title: "How To Get The Client IP Address In Your App",
  socialCardImageUri,
  summary: `The client IPs are not what they seem. What the Internet has told
    you about detecting them is probably wrong.`,
};
