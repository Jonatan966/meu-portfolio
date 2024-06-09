import Android from "./android.svg";
import Angularjs from "./angularjs.svg";
import AntDesign from "./ant-design.svg";
import AspNet from "./asp-net.svg";
import Aws from "./aws.svg";
import Azure from "./azure.svg";
import Bootstrap from "./bootstrap.svg";
import CSharp from "./c-sharp.svg";
import C from "./c.svg";
import CircleCi from "./circle-ci.svg";
import Cloudflare from "./cloudflare.svg";
import Css3 from "./css3.svg";
import Dart from "./dart.svg";
import Docker from "./docker.svg";
import DotNet from "./dot-net.svg";
import Electron from "./electron.svg";
import Faunadb from "./faunadb.svg";
import Firebase from "./firebase.svg";
import Flask from "./flask.svg";
import Flutter from "./flutter.svg";
import Gatsby from "./gatsby.svg";
import Gcp from "./gcp.svg";
import Git from "./git.svg";
import GithubActions from "./github-actions.svg";
import Go from "./go.svg";
import Graphql from "./graphql.svg";
import Gulp from "./gulp.svg";
import Heroku from "./heroku.svg";
import Html5 from "./html5.svg";
import Java from "./java.svg";
import Javascript from "./javascript.svg";
import Jenkins from "./jenkins.svg";
import Jest from "./jest.svg";
import Kotlin from "./kotlin.svg";
import Laravel from "./laravel.svg";
import Lua from "./lua.svg";
import MaterializeCss from "./materialize-css.svg";
import Mongodb from "./mongodb.svg";
import Mysql from "./mysql.svg";
import Nextjs from "./nextjs.svg";
import Nginx from "./nginx.svg";
import Node from "./node.svg";
import Nosql from "./nosql.svg";
import Oracle from "./oracle.svg";
import Php from "./php.svg";
import Postgresql from "./postgresql.svg";
import Python from "./python.svg";
import ReactNative from "./react-native.svg";
import Reactjs from "./reactjs.svg";
import Redis from "./redis.svg";
import Redux from "./redux.svg";
import SeleniumWebdriver from "./selenium-webdriver.svg";
import Sentry from "./sentry.svg";
import SocketIo from "./socket-io.svg";
import Tailwind from "./tailwind.svg";
import Terraform from "./terraform.svg";
import TravisCi from "./travis-ci.svg";
import Typescript from "./typescript.svg";
import Vuejs from "./vuejs.svg";
import Webpack from "./webpack.svg";
import OpenAI from "./openai.svg";
import Discord from "./discord.svg";
import Stripe from "./stripe.svg";

export enum Tech {
  ANDROID = "android",
  ANGULARJS = "angularjs",
  ANT_DESIGN = "ant-design",
  ASP_NET = "asp-net",
  AWS = "aws",
  AZURE = "azure",
  BOOTSTRAP = "bootstrap",
  C_SHARP = "c-sharp",
  C = "c",
  CIRCLE_CI = "circle-ci",
  CLOUDFLARE = "cloudflare",
  CSS3 = "css3",
  DART = "dart",
  DOCKER = "docker",
  DOT_NET = "dot-net",
  ELECTRON = "electron",
  FAUNADB = "faunadb",
  FIREBASE = "firebase",
  FLASK = "flask",
  FLUTTER = "flutter",
  GATSBY = "gatsby",
  GCP = "gcp",
  GIT = "git",
  GITHUB_ACTIONS = "github-actions",
  GO = "go",
  GRAPHQL = "graphql",
  GULP = "gulp",
  HEROKU = "heroku",
  HTML5 = "html5",
  JAVA = "java",
  JAVASCRIPT = "javascript",
  JENKINS = "jenkins",
  JEST = "jest",
  KOTLIN = "kotlin",
  LARAVEL = "laravel",
  LUA = "lua",
  MATERIALIZE_CSS = "materialize-css",
  MONGODB = "mongodb",
  MYSQL = "mysql",
  NEXTJS = "nextjs",
  NGINX = "nginx",
  NODE = "node-js",
  NOSQL = "nosql",
  ORACLE = "oracle",
  PHP = "php",
  POSTGRESQL = "postgresql",
  PYTHON = "python",
  REACT_NATIVE = "react-native",
  REACTJS = "react-js",
  REDIS = "redis",
  REDUX = "redux",
  SELENIUM_WEBDRIVER = "selenium-webdriver",
  SENTRY = "sentry",
  SOCKET_IO = "socket-io",
  TAILWIND = "tailwind",
  TERRAFORM = "terraform",
  TRAVIS_CI = "travis-ci",
  TYPESCRIPT = "typescript",
  VUEJS = "vuejs",
  WEBPACK = "webpack",
  OPEN_AI = "openai",
  DISCORD = "discord",
  STRIPE = "stripe",
}

export const Techs = {
  [Tech.ANDROID]: Android,
  [Tech.ANGULARJS]: Angularjs,
  [Tech.ANT_DESIGN]: AntDesign,
  [Tech.ASP_NET]: AspNet,
  [Tech.AWS]: Aws,
  [Tech.AZURE]: Azure,
  [Tech.BOOTSTRAP]: Bootstrap,
  [Tech.C_SHARP]: CSharp,
  [Tech.C]: C,
  [Tech.CIRCLE_CI]: CircleCi,
  [Tech.CLOUDFLARE]: Cloudflare,
  [Tech.CSS3]: Css3,
  [Tech.DART]: Dart,
  [Tech.DOCKER]: Docker,
  [Tech.DOT_NET]: DotNet,
  [Tech.ELECTRON]: Electron,
  [Tech.FAUNADB]: Faunadb,
  [Tech.FIREBASE]: Firebase,
  [Tech.FLASK]: Flask,
  [Tech.FLUTTER]: Flutter,
  [Tech.GATSBY]: Gatsby,
  [Tech.GCP]: Gcp,
  [Tech.GIT]: Git,
  [Tech.GITHUB_ACTIONS]: GithubActions,
  [Tech.GO]: Go,
  [Tech.GRAPHQL]: Graphql,
  [Tech.GULP]: Gulp,
  [Tech.HEROKU]: Heroku,
  [Tech.HTML5]: Html5,
  [Tech.JAVA]: Java,
  [Tech.JAVASCRIPT]: Javascript,
  [Tech.JENKINS]: Jenkins,
  [Tech.JEST]: Jest,
  [Tech.KOTLIN]: Kotlin,
  [Tech.LARAVEL]: Laravel,
  [Tech.LUA]: Lua,
  [Tech.MATERIALIZE_CSS]: MaterializeCss,
  [Tech.MONGODB]: Mongodb,
  [Tech.MYSQL]: Mysql,
  [Tech.NEXTJS]: Nextjs,
  [Tech.NGINX]: Nginx,
  [Tech.NODE]: Node,
  [Tech.NOSQL]: Nosql,
  [Tech.ORACLE]: Oracle,
  [Tech.PHP]: Php,
  [Tech.POSTGRESQL]: Postgresql,
  [Tech.PYTHON]: Python,
  [Tech.REACT_NATIVE]: ReactNative,
  [Tech.REACTJS]: Reactjs,
  [Tech.REDIS]: Redis,
  [Tech.REDUX]: Redux,
  [Tech.SELENIUM_WEBDRIVER]: SeleniumWebdriver,
  [Tech.SENTRY]: Sentry,
  [Tech.SOCKET_IO]: SocketIo,
  [Tech.TAILWIND]: Tailwind,
  [Tech.TERRAFORM]: Terraform,
  [Tech.TRAVIS_CI]: TravisCi,
  [Tech.TYPESCRIPT]: Typescript,
  [Tech.VUEJS]: Vuejs,
  [Tech.WEBPACK]: Webpack,
  [Tech.OPEN_AI]: OpenAI,
  [Tech.DISCORD]: Discord,
  [Tech.STRIPE]: Stripe,
};
