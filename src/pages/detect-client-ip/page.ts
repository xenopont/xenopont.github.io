import { stringToPath } from "../../converters/string-to-path.js";
import { highlight, type THighlightLanguage } from "../../render/highlight.js";
import type { THtmlElementMarkup } from "../../render/markup.js";
import * as m from "../../render/markup.js";
import type { TPartialPage } from "../../types/partial-page.js";

const codeSnippet = (
  language: THighlightLanguage,
  code: string,
  header?: THtmlElementMarkup | THtmlElementMarkup[],
  comment?: THtmlElementMarkup | THtmlElementMarkup[],
): THtmlElementMarkup => {
  const tags: THtmlElementMarkup[] = [];

  if (header) {
    tags.push(m.header(header));
  }

  tags.push(
    m.pre(m.code(highlight(language, code)), {
      class: "code-snippet-body",
    }),
  );

  if (comment) {
    tags.push(m.div(comment, { class: "code-snippet-comment" }));
  }

  return m.div(tags, { class: "code-snippet" });
};

export const HowToDetectClientIpPage: TPartialPage = {
  content: [
    m.p(
      m.safe(`Pretty often, your server app needs to know the IP address of
      a client making the HTTP request. For either securing the session,
      or tracking, or geolocation or any other reasonable purpose. All
      programming languages give you their options to do that:`),
    ),
    m.p(
      codeSnippet("java", "String clientIp = request.getRemoteAddr();", [
        m.strong(m.safe("Java")),
        m.safe(" (via "),
        m.code(highlight("java", "HttpServletRequest")),
        m.safe("):"),
      ]),
    ),
    m.p(
      codeSnippet("php", "$clientIp = $_SERVER['REMOTE_ADDR'];", [
        m.strong(m.safe("PHP")),
        m.safe(" (via the "),
        m.code(highlight("php", "$_SERVER")),
        m.safe(" superglobal):"),
      ]),
    ),
    m.p(
      codeSnippet(
        "javascript",
        "const clientIp = request.connection.remoteAddress;",
        [
          m.strong(m.safe("NodeJs")),
          m.safe(" (via the Express "),
          m.code(highlight("js", "request")),
          m.safe(" object):"),
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
          m.safe("Pure "),
          m.strong(m.safe("NodeJs")),
          m.safe(" (via the "),
          m.code(highlight("js", "http.createServer()")),
          m.safe("'s callback):"),
        ],
      ),
    ),
    m.p([
      m.safe(`As you can see, the server, listening to a socket in your app,
      knows its client address and ready to share it with you. This always
      works pretty well on your machine and gives you proper results:
      you'd either see the local `),
      m.code(highlight("bash", "127.0.0.1")),
      m.safe(` address, or, if you run the app in a docker container, it'd be
      the docker host machine address `),
      m.code(highlight("bash", "::ffff:172.17.0.1")),
      m.safe(` or smth.`),
    ]),
    m.p(
      m.safe(`The interesting part comes when you want to deploy that
      on production.`),
    ),
    m.p(
      m.unsafe(`Nobody wants to take care of load balancing, bot attack
      protection, caching and serving SSL certificates in their code every time.
      That's why your app on production is always deployed behind a
      ${m.em(m.unsafe("load balancer"))}, which serves requests of a
      ${m.em(m.unsafe("cache manager"))}, which sits behind a
      ${m.em(m.unsafe("firewall"))}, etc. And all those smart internet
      providers, hiding their client networks by chains of
      ${m.em(m.unsafe("proxy-servers"))}... Which IP from those is visible
      to your app? Its direct client – the
      ${m.em(m.unsafe("load balancer"))}, in this case.`),
    ),
    m.p(
      m.unsafe(`Wait a minute! Does that mean, the client IP vanished into
      oblivion? ${m.br()}
      Luckily, not.`),
    ),
    m.p(
      m.unsafe(`By an RFC, every
      ${m.em(m.safe("proxy / firewall / load balancing server"))}
      should append an additional header to the request and keep the original
      client IP there. You can find a lot of suggestions in the Internet,
      to take the header called ${m.code(highlight("bash", "X-Forwarded-For"))}
      as the client IP address. But that is just half true, which is worse
      than a lie.`),
    ),
    m.p(
      m.unsafe(`In fact, the ${m.code(highlight("bash", "X-Forwarded-For"))}
      header may contain the full chain of proxies, and its format is the
      following:`),
    ),
    m.p(
      codeSnippet(
        "bash",
        "<client-ip>, <proxy1-ip>, <proxy2-ip>, ..., <proxyN-ip>",
      ),
    ),
    m.p(
      m.safe(`So, knowing that, we're ready to get the client IP address
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
        m.unsafe(`${m.strong(m.safe("Java"))} (via
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
        m.unsafe(`${m.strong(m.safe("PHP"))} (via the
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
        m.unsafe(`${m.strong(m.safe("NodeJs"))} (via the Express
        ${m.code(highlight("js", "request"))} object):`),
      ),
    ),
    m.p(
      m.unsafe(
        `Note, that there is a method ${m.code(highlight("js", "isValidIp()"))}
        used in every approach; all languages provide their own tools for
        such a validation. Every time you get an IP from a request header,
        it must be validated, since it's almost the same as a user input and
        can contain anything. If the IP is not valid, better to fall back to
        the ${m.code(highlight("js", "remoteAddress"))} thing, or any string
        constant of your choice, like
        ${m.code(highlight("js", '"127.0.0.1"'))} or
        ${m.code(highlight("js", '"::1"'))}.`,
      ),
    ),
    m.p(m.safe(`Is that all? Are those snippets gonna work now?`)),
    m.p(
      m.unsafe(`Well, yes. If you're lucky and your proxy servers are properly
      tuned to follow the standards and keep the client IP in the
      ${m.code(highlight("bash", "X-Forwarded-For"))} header. If you can
      configure them or ask someone to do that for you, always prefer
      that way.`),
    ),
    m.p(
      m.unsafe(`Otherwise, you’ll have to experiment in the target environment
      and start listing all the request headers. There you may meet a whole zoo
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
      m.unsafe(`Translate this to your favorite programming language and
      put after checking the ${m.code(highlight("bash", "X-Forwarded-For"))}
      header and before returning the default value at the end of the method.
      And don't forget to add a big comment explaining those headers and
      the sources where they are coming from. Otherwise, the next developer
      will never know what can be kept and what should be thrown away.`),
    ),
    m.p(
      m.unsafe(`For future, you might consider processing also
      the ${m.code(highlight("bash", "Forwarded"))} header, proposed in 2014
      but not used IRL yet. Probably, due to its complexity and overload:`),
    ),
    m.p(
      codeSnippet(
        "bash",
        "Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43",
        m.unsafe(
          `2014, ${m.a(
            "https://tools.ietf.org/html/rfc7239",
            m.safe("https://tools.ietf.org/html/rfc7239"),
          )}`,
        ),
      ),
    ),
  ],
  createdAt: new Date("2020-01-17"),
  path: stringToPath("how-to-get-the-client-ip-address-in-your-app"),
  title: "How To Get The Client IP Address In Your App",
};
