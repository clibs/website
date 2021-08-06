//
// This is a generated file. Do not edit directly!
//

import { Package, CategoryList, KeywordList } from './types'

export const keywords: KeywordList = {
  '64': { slug: '64', packages: ['littlstar/b64.c'] },
  buf: {
    slug: 'buf',
    packages: ['clibs/buffer', 'rikvdh/zabuffer', 'rikvdh/zringbuf']
  },
  buffer: {
    slug: 'buffer',
    packages: [
      'clibs/buffer',
      'dhobsd/vstring',
      'gioyik/buffer-libc',
      'aperezdc/dbuf',
      'isty001/mem-pool',
      'willemt/cbuffer',
      'rikvdh/zabuffer',
      'rikvdh/zringbuf'
    ]
  },
  string: {
    slug: 'string',
    packages: [
      'clibs/buffer',
      'jwerle/strsplit.h',
      'hkjels/slug.c',
      'stephenmathieson/case.c',
      'stephenmathieson/occurrences.c',
      'stephenmathieson/str-ends-with.c',
      'stephenmathieson/str-flatten.c',
      'stephenmathieson/str-replace.c',
      'stephenmathieson/str-starts-with.c',
      'stephenmathieson/substr.c',
      'stephenmathieson/trim.c',
      'dhobsd/vstring',
      'chrisdew/sds',
      'clibs/wildcardcmp',
      'littlstar/asprintf.c',
      'clibs/strndup',
      'clibs/strdup',
      'littlstar/trim.cc',
      'lib-x/xstr',
      'clibs/bytes',
      'troydhanson/uthash',
      'rikvdh/zabuffer',
      'rikvdh/matching',
      'adricoin2010/utf8-iterator'
    ]
  },
  str: { slug: 'str', packages: ['clibs/buffer', 'lib-x/xstr'] },
  util: {
    slug: 'util',
    packages: [
      'clibs/buffer',
      'lib-x/xstr',
      'clibs/ck',
      'jwerle/async.h',
      'sphia/sphia'
    ]
  },
  utils: {
    slug: 'utils',
    packages: ['clibs/buffer', 'lib-x/xstr', 'ararslan/termcolor-c']
  },
  split: { slug: 'split', packages: ['jwerle/strsplit.h'] },
  char: { slug: 'char', packages: ['jwerle/chfreq.c', 'jwerle/getch.c'] },
  frequency: { slug: 'frequency', packages: ['jwerle/chfreq.c'] },
  slug: { slug: 'slug', packages: ['hkjels/slug.c'] },
  replace: {
    slug: 'replace',
    packages: ['hkjels/slug.c', 'stephenmathieson/str-replace.c']
  },
  uppercase: { slug: 'uppercase', packages: ['stephenmathieson/case.c'] },
  lowercase: { slug: 'lowercase', packages: ['stephenmathieson/case.c'] },
  occurrences: {
    slug: 'occurrences',
    packages: ['stephenmathieson/occurrences.c']
  },
  count: {
    slug: 'count',
    packages: ['stephenmathieson/occurrences.c', 'clibs/timer']
  },
  path: {
    slug: 'path',
    packages: [
      'stephenmathieson/path-join.c',
      'stephenmathieson/path-normalize.c',
      'michaelrhodes/path-basename.c',
      'clibs/which',
      'brendanashworth/r3'
    ]
  },
  join: {
    slug: 'join',
    packages: ['stephenmathieson/path-join.c', 'stephenmathieson/str-flatten.c']
  },
  directory: {
    slug: 'directory',
    packages: [
      'stephenmathieson/path-join.c',
      'stephenmathieson/path-normalize.c',
      'cxong/tinydir',
      'isty001/copy'
    ]
  },
  file: {
    slug: 'file',
    packages: [
      'stephenmathieson/path-join.c',
      'daddinuz/liblogger',
      'jwerle/fs.c',
      'willemt/file2str',
      'willemt/stubfile',
      'cxong/tinydir',
      'isty001/copy',
      'clibs/entr'
    ]
  },
  normalize: {
    slug: 'normalize',
    packages: ['stephenmathieson/path-normalize.c']
  },
  extname: { slug: 'extname', packages: ['jb55/extname.c', 'jb55/extname'] },
  ext: { slug: 'ext', packages: ['jb55/extname.c'] },
  rot13: { slug: 'rot13', packages: ['stephenmathieson/rot13.c'] },
  rotate: { slug: 'rotate', packages: ['stephenmathieson/rot13.c'] },
  encryption: {
    slug: 'encryption',
    packages: ['stephenmathieson/rot13.c', 'veqtrus/vial_aes']
  },
  flatten: { slug: 'flatten', packages: ['stephenmathieson/str-flatten.c'] },
  substr: { slug: 'substr', packages: ['stephenmathieson/substr.c'] },
  substring: { slug: 'substring', packages: ['stephenmathieson/substr.c'] },
  trim: {
    slug: 'trim',
    packages: ['stephenmathieson/trim.c', 'littlstar/trim.cc']
  },
  'trim left': {
    slug: 'trim-left',
    packages: ['stephenmathieson/trim.c', 'littlstar/trim.cc']
  },
  'trim right': {
    slug: 'trim-right',
    packages: ['stephenmathieson/trim.c', 'littlstar/trim.cc']
  },
  strings: {
    slug: 'strings',
    packages: ['chrisdew/sds', 'lib-x/xstr', 'adricoin2010/utf8-iterator']
  },
  basename: { slug: 'basename', packages: ['michaelrhodes/path-basename.c'] },
  wildcard: { slug: 'wildcard', packages: ['clibs/wildcardcmp'] },
  comparison: {
    slug: 'comparison',
    packages: ['clibs/wildcardcmp', 'willemt/minmax']
  },
  asprintf: { slug: 'asprintf', packages: ['littlstar/asprintf.c'] },
  sprintf: { slug: 'sprintf', packages: ['littlstar/asprintf.c'] },
  alloc: { slug: 'alloc', packages: ['littlstar/asprintf.c'] },
  copy: { slug: 'copy', packages: ['clibs/strdup', 'isty001/copy'] },
  c99: { slug: 'c99', packages: ['tingping/ustring'] },
  unicode: { slug: 'unicode', packages: ['tingping/ustring'] },
  utf8: {
    slug: 'utf8',
    packages: [
      'tingping/ustring',
      'jwerle/libutf8',
      'adricoin2010/utf8-iterator'
    ]
  },
  'utf-8': { slug: 'utf-8', packages: ['tingping/ustring'] },
  martin: { slug: 'martin', packages: ['wooorm/stmr.c', 'wooorm/stmr'] },
  porter: { slug: 'porter', packages: ['wooorm/stmr.c', 'wooorm/stmr'] },
  stemmer: { slug: 'stemmer', packages: ['wooorm/stmr.c', 'wooorm/stmr'] },
  algorithm: {
    slug: 'algorithm',
    packages: [
      'wooorm/stmr.c',
      'wooorm/levenshtein.c',
      'abranhe/mergesort.c',
      'catb0t/fnv-hash',
      'wooorm/stmr',
      'wooorm/levenshtein'
    ]
  },
  c: {
    slug: 'c',
    packages: [
      'gioyik/buffer-libc',
      'madmurphy/libconfini',
      'orangeduck/luaautoc',
      'gioyik/c_printf',
      'gioyik/slim_color',
      'isty001/mem-pool',
      'gioyik/mapc',
      'orangeduck/mpc',
      'madmurphy/zen.h',
      'guillermocalvo/exceptions4c',
      'orangeduck/ptest'
    ]
  },
  lib: {
    slug: 'lib',
    packages: [
      'gioyik/buffer-libc',
      'gioyik/color-sh',
      'gioyik/c_printf',
      'gioyik/slim_color',
      'gioyik/mapc'
    ]
  },
  Vladimir: {
    slug: 'vladimir',
    packages: ['wooorm/levenshtein.c', 'wooorm/levenshtein']
  },
  Levenshtein: {
    slug: 'levenshtein',
    packages: ['wooorm/levenshtein.c', 'wooorm/levenshtein']
  },
  edit: {
    slug: 'edit',
    packages: ['wooorm/levenshtein.c', 'wooorm/levenshtein']
  },
  distance: {
    slug: 'distance',
    packages: ['wooorm/levenshtein.c', 'wooorm/levenshtein']
  },
  xstr: { slug: 'xstr', packages: ['lib-x/xstr'] },
  list: {
    slug: 'list',
    packages: [
      'lib-x/xstr',
      'yrmt/arraylist',
      'clibs/list',
      'troydhanson/uthash',
      'willemt/farraylist',
      'ajaymt/list.c',
      'clehner/ll.c',
      'kellydunn/libkld',
      'neylsongularte/simple-linked-list-c',
      'arablocks/flat-tree.c'
    ]
  },
  simple: { slug: 'simple', packages: ['lib-x/xstr'] },
  utilities: { slug: 'utilities', packages: ['lib-x/xstr'] },
  utility: {
    slug: 'utility',
    packages: [
      'lib-x/xstr',
      'ajaymt/dict.c',
      'ajaymt/list.c',
      'aperezdc/netdial'
    ]
  },
  dynamic: { slug: 'dynamic', packages: ['aperezdc/dbuf', 'rxi/vec'] },
  data: {
    slug: 'data',
    packages: [
      'aperezdc/dbuf',
      'troydhanson/uthash',
      'rikvdh/zabuffer',
      'rikvdh/zringbuf'
    ]
  },
  color: {
    slug: 'color',
    packages: [
      'clibs/rgba',
      'constellation/console-colors.c',
      'gioyik/color-sh',
      'gioyik/c_printf',
      'gioyik/slim_color',
      'daddinuz/liblogger',
      'ararslan/termcolor-c',
      'bonedaddy/ulog',
      'mattn/ansicolor-w32.c'
    ]
  },
  rgb: { slug: 'rgb', packages: ['clibs/rgba'] },
  rgba: { slug: 'rgba', packages: ['clibs/rgba'] },
  parse: {
    slug: 'parse',
    packages: ['clibs/rgba', 'jwerle/url.h', 'thlorenz/gumbo-parser.c']
  },
  formatter: { slug: 'formatter', packages: ['clibs/rgba'] },
  unlikely: { slug: 'unlikely', packages: ['clibs/unlikely'] },
  branch: { slug: 'branch', packages: ['clibs/unlikely'] },
  prediction: { slug: 'prediction', packages: ['clibs/unlikely'] },
  macro: {
    slug: 'macro',
    packages: [
      'clibs/unlikely',
      'alebcay/metric',
      'troydhanson/uthash',
      'madmurphy/zen.h'
    ]
  },
  cli: {
    slug: 'cli',
    packages: [
      'aperezdc/cflag',
      'clibs/commander',
      'clibs/flag',
      'zackehh/siphash-c',
      'sphia/sphia',
      'wooorm/stmr',
      'wooorm/levenshtein'
    ]
  },
  flag: { slug: 'flag', packages: ['aperezdc/cflag', 'clibs/flag'] },
  options: {
    slug: 'options',
    packages: ['aperezdc/cflag', 'clibs/commander', 'clibs/flag']
  },
  parser: {
    slug: 'parser',
    packages: [
      'aperezdc/cflag',
      'clibs/commander',
      'clibs/flag',
      'clibs/inih',
      'madmurphy/libconfini',
      'clibs/logfmt',
      'orangeduck/mpc',
      'brendanashworth/http-parser',
      'h2non/semver.c',
      'kgabis/parson',
      'qute/qute',
      'littlstar/sop'
    ]
  },
  command: { slug: 'command', packages: ['clibs/commander', 'clibs/flag'] },
  argv: { slug: 'argv', packages: ['clibs/commander', 'clibs/flag'] },
  args: { slug: 'args', packages: ['clibs/commander', 'clibs/flag'] },
  flags: { slug: 'flags', packages: ['clibs/flag'] },
  ms: { slug: 'ms', packages: ['clibs/ms'] },
  us: { slug: 'us', packages: ['clibs/ms'] },
  usec: { slug: 'usec', packages: ['clibs/ms'] },
  millisecond: { slug: 'millisecond', packages: ['clibs/ms'] },
  microsecond: { slug: 'microsecond', packages: ['clibs/ms'] },
  conversion: { slug: 'conversion', packages: ['clibs/ms', 'alebcay/metric'] },
  convert: {
    slug: 'convert',
    packages: ['clibs/ms', 'stephenmathieson/tabs-to-spaces']
  },
  bytes: { slug: 'bytes', packages: ['clibs/bytes'] },
  size: { slug: 'size', packages: ['clibs/bytes'] },
  terminal: {
    slug: 'terminal',
    packages: [
      'clibs/term',
      'doches/progressbar',
      'jwerle/progress.h',
      'xythobuz/serial',
      'gioyik/color-sh',
      'nsf/termbox',
      'ararslan/termcolor-c'
    ]
  },
  term: {
    slug: 'term',
    packages: ['clibs/term', 'xythobuz/serial', 'nsf/termbox']
  },
  tty: {
    slug: 'tty',
    packages: [
      'clibs/term',
      'doches/progressbar',
      'jwerle/progress.h',
      'xythobuz/serial',
      'nsf/termbox'
    ]
  },
  ansi: {
    slug: 'ansi',
    packages: [
      'clibs/term',
      'nsf/termbox',
      'h2non/semver.c',
      'mattn/ansicolor-w32.c'
    ]
  },
  escape: { slug: 'escape', packages: ['clibs/term', 'nsf/termbox'] },
  colors: { slug: 'colors', packages: ['clibs/term', 'nsf/termbox'] },
  console: {
    slug: 'console',
    packages: [
      'clibs/term',
      'doches/progressbar',
      'constellation/console-colors.c',
      'xythobuz/serial',
      'gioyik/color-sh',
      'nsf/termbox'
    ]
  },
  ini: { slug: 'ini', packages: ['clibs/inih', 'madmurphy/libconfini'] },
  rotl: { slug: 'rotl', packages: ['jb55/rotate-bits.h'] },
  rotr: { slug: 'rotr', packages: ['jb55/rotate-bits.h'] },
  url: { slug: 'url', packages: ['jwerle/url.h'] },
  progress: {
    slug: 'progress',
    packages: ['doches/progressbar', 'jwerle/progress.h', 'willemt/chunkybar']
  },
  progressbar: { slug: 'progressbar', packages: ['doches/progressbar'] },
  statusbar: { slug: 'statusbar', packages: ['doches/progressbar'] },
  getch: { slug: 'getch', packages: ['jwerle/getch.c'] },
  usleep: { slug: 'usleep', packages: ['jwerle/usleep.h'] },
  bacon: { slug: 'bacon', packages: ['jwerle/libbacon'] },
  baconian: { slug: 'baconian', packages: ['jwerle/libbacon'] },
  cipher: {
    slug: 'cipher',
    packages: ['jwerle/libbacon', 'jwerle/libbeaufort']
  },
  beaufort: { slug: 'beaufort', packages: ['jwerle/libbeaufort'] },
  'bare-metal': { slug: 'bare-metal', packages: ['madmurphy/libconfini'] },
  conf: { slug: 'conf', packages: ['madmurphy/libconfini'] },
  'conf-file': { slug: 'conf-file', packages: ['madmurphy/libconfini'] },
  'conf-library': { slug: 'conf-library', packages: ['madmurphy/libconfini'] },
  config: { slug: 'config', packages: ['madmurphy/libconfini'] },
  configuration: {
    slug: 'configuration',
    packages: ['madmurphy/libconfini', 'willemt/config-re']
  },
  'configuration-file': {
    slug: 'configuration-file',
    packages: ['madmurphy/libconfini']
  },
  'configuration-management': {
    slug: 'configuration-management',
    packages: ['madmurphy/libconfini']
  },
  cstring: { slug: 'cstring', packages: ['madmurphy/libconfini'] },
  gnu: { slug: 'gnu', packages: ['madmurphy/libconfini'] },
  'ini-config': { slug: 'ini-config', packages: ['madmurphy/libconfini'] },
  'ini-file': { slug: 'ini-file', packages: ['madmurphy/libconfini'] },
  'ini-library': { slug: 'ini-library', packages: ['madmurphy/libconfini'] },
  'ini-parser': { slug: 'ini-parser', packages: ['madmurphy/libconfini'] },
  'ini-reader': { slug: 'ini-reader', packages: ['madmurphy/libconfini'] },
  library: {
    slug: 'library',
    packages: [
      'madmurphy/libconfini',
      'orangeduck/mpc',
      'guillermocalvo/exceptions4c'
    ]
  },
  'shared-library': {
    slug: 'shared-library',
    packages: ['madmurphy/libconfini']
  },
  unix: { slug: 'unix', packages: ['madmurphy/libconfini'] },
  email: { slug: 'email', packages: ['stephenmathieson/is-email.c'] },
  validate: {
    slug: 'validate',
    packages: ['stephenmathieson/is-email.c', 'clibs/clib-validate']
  },
  html: { slug: 'html', packages: ['thlorenz/gumbo-parser.c'] },
  html5: { slug: 'html5', packages: ['thlorenz/gumbo-parser.c'] },
  clib: { slug: 'clib', packages: ['thlorenz/gumbo-parser.c'] },
  log: {
    slug: 'log',
    packages: [
      'thlorenz/log.h',
      'kdmurray91/clogged',
      'daddinuz/liblogger',
      'daddinuz/logger',
      'aperezdc/clog',
      'clibs/logfmt',
      'clibs/debug'
    ]
  },
  debug: {
    slug: 'debug',
    packages: [
      'thlorenz/log.h',
      'kdmurray91/clogged',
      'aperezdc/clog',
      'clibs/debug'
    ]
  },
  print: { slug: 'print', packages: ['thlorenz/log.h', 'kdmurray91/clogged'] },
  diagnostics: {
    slug: 'diagnostics',
    packages: ['thlorenz/log.h', 'kdmurray91/clogged']
  },
  tree: {
    slug: 'tree',
    packages: [
      'sciascid/tree',
      'clibs/red-black-tree',
      'kellydunn/libkld',
      'arablocks/flat-tree.c'
    ]
  },
  'red-black': { slug: 'red-black', packages: ['sciascid/tree'] },
  splay: { slug: 'splay', packages: ['sciascid/tree'] },
  container: {
    slug: 'container',
    packages: ['sciascid/tree', 'clibs/hash', 'jlcordeiro/cmap']
  },
  markov: { slug: 'markov', packages: ['clehner/chains'] },
  chains: { slug: 'chains', packages: ['clehner/chains'] },
  registry: {
    slug: 'registry',
    packages: ['stephenmathieson/wiki-registry.c']
  },
  github: {
    slug: 'github',
    packages: ['stephenmathieson/wiki-registry.c', 'stephenmathieson/ghi']
  },
  wiki: { slug: 'wiki', packages: ['stephenmathieson/wiki-registry.c'] },
  serial: { slug: 'serial', packages: ['xythobuz/serial'] },
  'Mersenne Twister': {
    slug: 'mersenne-twister',
    packages: ['clibs/mt19937ar']
  },
  random: {
    slug: 'random',
    packages: ['clibs/mt19937ar', 'willemt/bag', 'jb55/samp']
  },
  password: { slug: 'password', packages: ['brendanashworth/genpassword.c'] },
  generate: { slug: 'generate', packages: ['brendanashworth/genpassword.c'] },
  generator: { slug: 'generator', packages: ['brendanashworth/genpassword.c'] },
  'asn.1': { slug: 'asn-1', packages: ['clibs/dumpasn1'] },
  asn1: { slug: 'asn1', packages: ['clibs/dumpasn1'] },
  ber: { slug: 'ber', packages: ['clibs/dumpasn1'] },
  der: { slug: 'der', packages: ['clibs/dumpasn1'] },
  lua: { slug: 'lua', packages: ['orangeduck/luaautoc'] },
  api: { slug: 'api', packages: ['orangeduck/luaautoc', 'aperezdc/apicheck'] },
  automatic: {
    slug: 'automatic',
    packages: ['orangeduck/luaautoc', 'aperezdc/autocleanup']
  },
  functions: { slug: 'functions', packages: ['orangeduck/luaautoc'] },
  structs: { slug: 'structs', packages: ['orangeduck/luaautoc'] },
  sh: { slug: 'sh', packages: ['gioyik/color-sh'] },
  printf: { slug: 'printf', packages: ['gioyik/c_printf'] },
  termbox: { slug: 'termbox', packages: ['nsf/termbox'] },
  portable: {
    slug: 'portable',
    packages: ['noporpoise/sort_r', 'mikepb/endian.h']
  },
  qsort: { slug: 'qsort', packages: ['noporpoise/sort_r'] },
  qsort_s: { slug: 'qsort-s', packages: ['noporpoise/sort_r'] },
  qsort_r: { slug: 'qsort-r', packages: ['noporpoise/sort_r'] },
  reentrant: { slug: 'reentrant', packages: ['noporpoise/sort_r'] },
  'memory-pool': { slug: 'memory-pool', packages: ['isty001/mem-pool'] },
  memory: {
    slug: 'memory',
    packages: [
      'isty001/mem-pool',
      'daddinuz/arena',
      'rikvdh/zabuffer',
      'rikvdh/zringbuf',
      'rikvdh/matching',
      'daddinuz/watchdog'
    ]
  },
  pool: { slug: 'pool', packages: ['isty001/mem-pool'] },
  pthread: {
    slug: 'pthread',
    packages: ['isty001/mem-pool', 'stephenmathieson/batch.c']
  },
  alignment: { slug: 'alignment', packages: ['isty001/mem-pool'] },
  mutex: { slug: 'mutex', packages: ['isty001/mem-pool'] },
  memorypool: { slug: 'memorypool', packages: ['isty001/mem-pool'] },
  locks: { slug: 'locks', packages: ['isty001/mem-pool'] },
  variable: { slug: 'variable', packages: ['isty001/mem-pool'] },
  metric: { slug: 'metric', packages: ['alebcay/metric'] },
  customary: { slug: 'customary', packages: ['alebcay/metric'] },
  '.env': { slug: 'env', packages: ['isty001/dotenv-c'] },
  dotenv: { slug: 'dotenv', packages: ['isty001/dotenv-c'] },
  environemnt: { slug: 'environemnt', packages: ['isty001/dotenv-c'] },
  variables: { slug: 'variables', packages: ['isty001/dotenv-c'] },
  logging: {
    slug: 'logging',
    packages: ['daddinuz/liblogger', 'daddinuz/logger', 'aperezdc/clog']
  },
  logger: {
    slug: 'logger',
    packages: ['daddinuz/liblogger', 'daddinuz/logger', 'bonedaddy/ulog']
  },
  stream: {
    slug: 'stream',
    packages: [
      'daddinuz/liblogger',
      'thlorenz/sync-stream.c',
      'willemt/bitstream'
    ]
  },
  logs: { slug: 'logs', packages: ['daddinuz/logger'] },
  termcolor: { slug: 'termcolor', packages: ['ararslan/termcolor-c'] },
  'header-only': { slug: 'header-only', packages: ['ararslan/termcolor-c'] },
  'arena-allocator': { slug: 'arena-allocator', packages: ['daddinuz/arena'] },
  'memory-region': { slug: 'memory-region', packages: ['daddinuz/arena'] },
  allocator: { slug: 'allocator', packages: ['daddinuz/arena'] },
  sorting: { slug: 'sorting', packages: ['abranhe/mergesort.c'] },
  merge: { slug: 'merge', packages: ['abranhe/mergesort.c'] },
  mergesort: { slug: 'mergesort', packages: ['abranhe/mergesort.c'] },
  allalgorithms: { slug: 'allalgorithms', packages: ['abranhe/mergesort.c'] },
  threadsafe: { slug: 'threadsafe', packages: ['bonedaddy/ulog'] },
  disjoint: { slug: 'disjoint', packages: ['jmi2k/disjoint.h'] },
  sum: { slug: 'sum', packages: ['jmi2k/disjoint.h'] },
  functional: { slug: 'functional', packages: ['jmi2k/disjoint.h'] },
  header: { slug: 'header', packages: ['jmi2k/disjoint.h'] },
  tail: { slug: 'tail', packages: ['yrmt/arraylist'] },
  queue: {
    slug: 'queue',
    packages: [
      'yrmt/arraylist',
      'willemt/bipbuffer',
      'willemt/heap',
      'willemt/linked-list-queue',
      'willemt/meanqueue',
      'willemt/arrayqueue',
      'willemt/duraqueue'
    ]
  },
  'linked-list': { slug: 'linked-list', packages: ['yrmt/arraylist'] },
  linked: {
    slug: 'linked',
    packages: [
      'yrmt/arraylist',
      'ajaymt/list.c',
      'neylsongularte/simple-linked-list-c'
    ]
  },
  ArrayList: { slug: 'array-list', packages: ['yrmt/arraylist'] },
  hash: {
    slug: 'hash',
    packages: [
      'clibs/hash',
      'troydhanson/uthash',
      'ajaymt/dict.c',
      'jwerle/murmurhash.c',
      'clibs/sha1',
      'catb0t/fnv-hash'
    ]
  },
  khash: { slug: 'khash', packages: ['clibs/hash'] },
  structure: {
    slug: 'structure',
    packages: ['clibs/list', 'troydhanson/uthash', 'clehner/ll.c']
  },
  binary: {
    slug: 'binary',
    packages: ['clibs/red-black-tree', 'arablocks/flat-tree.c']
  },
  black: { slug: 'black', packages: ['clibs/red-black-tree'] },
  red: { slug: 'red', packages: ['clibs/red-black-tree'] },
  search: { slug: 'search', packages: ['clibs/red-black-tree'] },
  sync: { slug: 'sync', packages: ['thlorenz/sync-stream.c'] },
  streaming: {
    slug: 'streaming',
    packages: ['thlorenz/sync-stream.c', 'willemt/streaming-bencode']
  },
  flow: { slug: 'flow', packages: ['thlorenz/sync-stream.c'] },
  array: {
    slug: 'array',
    packages: [
      'troydhanson/uthash',
      'willemt/bitfield',
      'rxi/vec',
      'willemt/farraylist',
      'ajaymt/list.c',
      'gioyik/mapc',
      'htmk/fat-array'
    ]
  },
  uthash: { slug: 'uthash', packages: ['troydhanson/uthash'] },
  'ring buffer': { slug: 'ring-buffer', packages: ['willemt/cbuffer'] },
  'circular buffer': {
    slug: 'circular-buffer',
    packages: ['willemt/cbuffer', 'willemt/bipbuffer']
  },
  bipbuffer: { slug: 'bipbuffer', packages: ['willemt/bipbuffer'] },
  ring: { slug: 'ring', packages: ['willemt/bipbuffer', 'rikvdh/zringbuf'] },
  heap: { slug: 'heap', packages: ['willemt/heap'] },
  'priority queue': { slug: 'priority-queue', packages: ['willemt/heap'] },
  LRU: { slug: 'lru', packages: ['willemt/pseudolru'] },
  cache: { slug: 'cache', packages: ['willemt/pseudolru'] },
  bag: { slug: 'bag', packages: ['willemt/bag'] },
  bits: { slug: 'bits', packages: ['willemt/bitfield', 'willemt/bitstream'] },
  bitfield: { slug: 'bitfield', packages: ['willemt/bitfield'] },
  'AVL tree': { slug: 'avl-tree', packages: ['willemt/array-avl-tree'] },
  'self balancing': {
    slug: 'self-balancing',
    packages: ['willemt/array-avl-tree']
  },
  set: { slug: 'set', packages: ['willemt/array-avl-tree'] },
  'data structure': {
    slug: 'data-structure',
    packages: ['willemt/array-avl-tree']
  },
  hashmap: {
    slug: 'hashmap',
    packages: [
      'willemt/linked-list-hashmap',
      'willemt/quadratic-probing-hashmap',
      'willemt/skiplist'
    ]
  },
  dictionary: {
    slug: 'dictionary',
    packages: [
      'willemt/linked-list-hashmap',
      'willemt/quadratic-probing-hashmap',
      'willemt/skiplist',
      'ajaymt/dict.c'
    ]
  },
  inplace: { slug: 'inplace', packages: ['willemt/quadratic-probing-hashmap'] },
  'open addressing': {
    slug: 'open-addressing',
    packages: ['willemt/quadratic-probing-hashmap']
  },
  vec: { slug: 'vec', packages: ['rxi/vec'] },
  vector: {
    slug: 'vector',
    packages: [
      'rxi/vec',
      'kellydunn/libkld',
      'htmk/fat-array',
      'mauromombelli/trigonomec',
      'glisy/math'
    ]
  },
  map: {
    slug: 'map',
    packages: ['jlcordeiro/cmap', 'willemt/skiplist', 'gioyik/mapc']
  },
  skiplist: { slug: 'skiplist', packages: ['willemt/skiplist'] },
  mean: { slug: 'mean', packages: ['willemt/meanqueue'] },
  bittorrent: {
    slug: 'bittorrent',
    packages: [
      'willemt/chunkybar',
      'willemt/torrent-reader',
      'willemt/stubfile',
      'willemt/tracker-client',
      'willemt/pwp',
      'willemt/yabtorrent',
      'willemt/heapless-bencode',
      'willemt/streaming-bencode'
    ]
  },
  lmdb: { slug: 'lmdb', packages: ['clibs/lmdb'] },
  'key/value': { slug: 'key-value', packages: ['clibs/lmdb', 'clibs/sophia'] },
  database: { slug: 'database', packages: ['clibs/lmdb', 'clibs/sophia'] },
  table: { slug: 'table', packages: ['ajaymt/dict.c'] },
  'data structures': {
    slug: 'data-structures',
    packages: ['kellydunn/libkld']
  },
  graph: { slug: 'graph', packages: ['kellydunn/libkld', 'visionmedia/histo'] },
  matrix: { slug: 'matrix', packages: ['kellydunn/libkld', 'glisy/math'] },
  mapc: { slug: 'mapc', packages: ['gioyik/mapc'] },
  lista: { slug: 'lista', packages: ['neylsongularte/simple-linked-list-c'] },
  encadeada: {
    slug: 'encadeada',
    packages: ['neylsongularte/simple-linked-list-c']
  },
  fptr: { slug: 'fptr', packages: ['htmk/fat-array'] },
  fat: { slug: 'fat', packages: ['htmk/fat-array'] },
  pointer: { slug: 'pointer', packages: ['htmk/fat-array'] },
  fatarray: { slug: 'fatarray', packages: ['htmk/fat-array'] },
  fat_array: { slug: 'fat-array', packages: ['htmk/fat-array'] },
  generic: { slug: 'generic', packages: ['laserswald/dlist'] },
  'double linked list': {
    slug: 'double-linked-list',
    packages: ['laserswald/dlist']
  },
  macros: { slug: 'macros', packages: ['laserswald/dlist', 'madmurphy/zen.h'] },
  math: {
    slug: 'math',
    packages: ['catb0t/sparse', 'glisy/math', 'catb0t/yacbnl']
  },
  arrays: { slug: 'arrays', packages: ['catb0t/sparse'] },
  bignum: { slug: 'bignum', packages: ['catb0t/sparse', 'catb0t/yacbnl'] },
  flat: { slug: 'flat', packages: ['arablocks/flat-tree.c'] },
  zeroallocation: {
    slug: 'zeroallocation',
    packages: ['rikvdh/zabuffer', 'rikvdh/zringbuf', 'rikvdh/matching']
  },
  ringbuffer: { slug: 'ringbuffer', packages: ['rikvdh/zringbuf'] },
  ringbuf: { slug: 'ringbuf', packages: ['rikvdh/zringbuf'] },
  sax: { slug: 'sax', packages: ['clibs/logfmt'] },
  logfmt: { slug: 'logfmt', packages: ['clibs/logfmt'] },
  ragel: { slug: 'ragel', packages: ['clibs/logfmt'] },
  combinator: { slug: 'combinator', packages: ['orangeduck/mpc'] },
  mpc: { slug: 'mpc', packages: ['orangeduck/mpc'] },
  bencode: {
    slug: 'bencode',
    packages: [
      'willemt/torrent-reader',
      'willemt/heapless-bencode',
      'willemt/streaming-bencode'
    ]
  },
  torrent: {
    slug: 'torrent',
    packages: [
      'willemt/torrent-reader',
      'willemt/heapless-bencode',
      'willemt/streaming-bencode'
    ]
  },
  serialization: {
    slug: 'serialization',
    packages: [
      'willemt/torrent-reader',
      'willemt/heapless-bencode',
      'willemt/streaming-bencode'
    ]
  },
  cut: { slug: 'cut', packages: ['jb55/field-range-parser.c'] },
  fields: { slug: 'fields', packages: ['jb55/field-range-parser.c'] },
  querystring: { slug: 'querystring', packages: ['jb55/querystring.c'] },
  uri: {
    slug: 'uri',
    packages: ['jb55/querystring.c', 'littlstar/uri.c', 'jwerle/suri']
  },
  is_number: { slug: 'is-number', packages: ['jb55/is_number.c'] },
  number: { slug: 'number', packages: ['jb55/is_number.c'] },
  http: {
    slug: 'http',
    packages: [
      'brendanashworth/http-parser',
      'littlstar/request.cc',
      'daddinuz/http',
      'clibs/http-get.c'
    ]
  },
  request: {
    slug: 'request',
    packages: ['brendanashworth/http-parser', 'littlstar/request.cc']
  },
  response: { slug: 'response', packages: ['brendanashworth/http-parser'] },
  semver: { slug: 'semver', packages: ['h2non/semver.c'] },
  semantic: { slug: 'semantic', packages: ['h2non/semver.c'] },
  versioning: { slug: 'versioning', packages: ['h2non/semver.c'] },
  version: { slug: 'version', packages: ['h2non/semver.c'] },
  dependencies: { slug: 'dependencies', packages: ['h2non/semver.c'] },
  matcher: { slug: 'matcher', packages: ['h2non/semver.c'] },
  json: { slug: 'json', packages: ['kgabis/parson', 'clibs/clib-validate'] },
  matching: { slug: 'matching', packages: ['rikvdh/matching'] },
  parsing: { slug: 'parsing', packages: ['rikvdh/matching'] },
  callback: {
    slug: 'callback',
    packages: ['rikvdh/matching', 'mobiushorizons/closure_module']
  },
  rle: { slug: 'rle', packages: ['clibs/rle'] },
  'run-length': { slug: 'run-length', packages: ['clibs/rle'] },
  compress: { slug: 'compress', packages: ['clibs/rle'] },
  codec: { slug: 'codec', packages: ['clibs/rle'] },
  component: { slug: 'component', packages: ['littlstar/uri.c'] },
  decode: { slug: 'decode', packages: ['littlstar/uri.c', 'clibs/amp'] },
  encode: { slug: 'encode', packages: ['littlstar/uri.c', 'clibs/amp'] },
  base: { slug: 'base', packages: ['littlstar/b64.c'] },
  crypto: {
    slug: 'crypto',
    packages: ['littlstar/b64.c', 'zackehh/siphash-c']
  },
  charset: {
    slug: 'charset',
    packages: ['jwerle/libutf8', 'adricoin2010/utf8-iterator']
  },
  encoding: {
    slug: 'encoding',
    packages: ['jwerle/libutf8', 'adricoin2010/utf8-iterator']
  },
  decoding: {
    slug: 'decoding',
    packages: ['jwerle/libutf8', 'adricoin2010/utf8-iterator']
  },
  'little endian': { slug: 'little-endian', packages: ['willemt/fe'] },
  'big endian': { slug: 'big-endian', packages: ['willemt/fe'] },
  endianess: { slug: 'endianess', packages: ['willemt/fe'] },
  endian: { slug: 'endian', packages: ['mikepb/endian.h'] },
  hex: { slug: 'hex', packages: ['pepaslabs/hexify.c'] },
  hexidecimal: { slug: 'hexidecimal', packages: ['pepaslabs/hexify.c'] },
  identifier: { slug: 'identifier', packages: ['aperezdc/ulid-c'] },
  unique: { slug: 'unique', packages: ['aperezdc/ulid-c'] },
  sortable: { slug: 'sortable', packages: ['aperezdc/ulid-c'] },
  universal: { slug: 'universal', packages: ['aperezdc/ulid-c'] },
  ulid: { slug: 'ulid', packages: ['aperezdc/ulid-c'] },
  fs: {
    slug: 'fs',
    packages: ['jwerle/fs.c', 'tomerdmnt/levelfs', 'clibs/entr']
  },
  filesystem: {
    slug: 'filesystem',
    packages: ['jwerle/fs.c', 'cxong/tinydir', 'tomerdmnt/levelfs']
  },
  system: { slug: 'system', packages: ['jwerle/fs.c'] },
  mkdir: { slug: 'mkdir', packages: ['stephenmathieson/mkdirp.c'] },
  mkdirp: { slug: 'mkdirp', packages: ['stephenmathieson/mkdirp.c'] },
  rm: { slug: 'rm', packages: ['stephenmathieson/rimraf.c'] },
  rimraf: { slug: 'rimraf', packages: ['stephenmathieson/rimraf.c'] },
  unlink: { slug: 'unlink', packages: ['stephenmathieson/rimraf.c'] },
  read: { slug: 'read', packages: ['willemt/file2str'] },
  'stub file': { slug: 'stub-file', packages: ['willemt/stubfile'] },
  temp: { slug: 'temp', packages: ['stephenmathieson/tempdir.c'] },
  tempdir: { slug: 'tempdir', packages: ['stephenmathieson/tempdir.c'] },
  pid: { slug: 'pid', packages: ['willemt/pidfile', 'jb55/pidpath'] },
  pidfile: { slug: 'pidfile', packages: ['willemt/pidfile'] },
  dir: { slug: 'dir', packages: ['cxong/tinydir', 'isty001/copy'] },
  reader: { slug: 'reader', packages: ['cxong/tinydir'] },
  recursive: { slug: 'recursive', packages: ['isty001/copy'] },
  lookup: { slug: 'lookup', packages: ['clibs/which'] },
  which: { slug: 'which', packages: ['clibs/which'] },
  locate: { slug: 'locate', packages: ['clibs/which'] },
  find: { slug: 'find', packages: ['clibs/which'] },
  bin: {
    slug: 'bin',
    packages: ['clibs/which', 'jb55/samp', 'wooorm/stmr', 'wooorm/levenshtein']
  },
  executable: { slug: 'executable', packages: ['clibs/which'] },
  murmur: { slug: 'murmur', packages: ['jwerle/murmurhash.c'] },
  murmurhash: { slug: 'murmurhash', packages: ['jwerle/murmurhash.c'] },
  sha1: { slug: 'sha1', packages: ['clibs/sha1'] },
  sha256: {
    slug: 'sha256',
    packages: ['jb55/sha256.c', 'aperezdc/hmac-sha256']
  },
  sha2: { slug: 'sha2', packages: ['jb55/sha256.c', 'aperezdc/hmac-sha256'] },
  hmac: { slug: 'hmac', packages: ['aperezdc/hmac-sha256'] },
  hashing: { slug: 'hashing', packages: ['zackehh/siphash-c'] },
  siphash: { slug: 'siphash', packages: ['zackehh/siphash-c'] },
  cryptography: { slug: 'cryptography', packages: ['veqtrus/vial_aes'] },
  aes: { slug: 'aes', packages: ['veqtrus/vial_aes'] },
  mac: { slug: 'mac', packages: ['veqtrus/vial_aes'] },
  async: {
    slug: 'async',
    packages: [
      'aisk/libae',
      'clibs/uv',
      'jwerle/async.h',
      'stephenmathieson/batch.c'
    ]
  },
  eventloop: { slug: 'eventloop', packages: ['aisk/libae'] },
  redis: { slug: 'redis', packages: ['aisk/libae'] },
  net: { slug: 'net', packages: ['aisk/libae'] },
  raft: { slug: 'raft', packages: ['willemt/raft'] },
  consensus: { slug: 'consensus', packages: ['willemt/raft'] },
  protocol: { slug: 'protocol', packages: ['willemt/raft', 'clibs/amp'] },
  tracker: { slug: 'tracker', packages: ['willemt/tracker-client'] },
  amp: { slug: 'amp', packages: ['clibs/amp'] },
  tcp: { slug: 'tcp', packages: ['clibs/amp', 'willemt/uv_multiplex'] },
  udp: { slug: 'udp', packages: ['clibs/amp'] },
  message: { slug: 'message', packages: ['clibs/amp'] },
  https: { slug: 'https', packages: ['littlstar/request.cc', 'daddinuz/http'] },
  requests: { slug: 'requests', packages: ['daddinuz/http'] },
  network: { slug: 'network', packages: ['aperezdc/netdial'] },
  sockets: { slug: 'sockets', packages: ['aperezdc/netdial'] },
  curl: { slug: 'curl', packages: ['clibs/http-get.c'] },
  get: { slug: 'get', packages: ['clibs/http-get.c'] },
  download: { slug: 'download', packages: ['clibs/http-get.c'] },
  libuv: {
    slug: 'libuv',
    packages: [
      'clibs/uv',
      'jwerle/async.h',
      'willemt/uv_multiplex',
      'willemt/bmon'
    ]
  },
  uv: { slug: 'uv', packages: ['clibs/uv'] },
  leveldb: {
    slug: 'leveldb',
    packages: ['clibs/leveldb', 'hij1nx/ldb', 'tomerdmnt/levelfs']
  },
  level: {
    slug: 'level',
    packages: ['clibs/leveldb', 'hij1nx/ldb', 'tomerdmnt/levelfs']
  },
  db: { slug: 'db', packages: ['clibs/leveldb', 'hij1nx/ldb'] },
  concurrency: {
    slug: 'concurrency',
    packages: ['clibs/ck', 'stephenmathieson/batch.c', 'tylertreat/chan']
  },
  ck: { slug: 'ck', packages: ['clibs/ck'] },
  apple: { slug: 'apple', packages: ['beltex/libsmc'] },
  osx: {
    slug: 'osx',
    packages: ['beltex/libsmc', 'lavoiesl/osx-cpu-temp', 'jwerle/suri']
  },
  smc: { slug: 'smc', packages: ['beltex/libsmc'] },
  dispatch: { slug: 'dispatch', packages: ['brendanashworth/r3'] },
  performance: { slug: 'performance', packages: ['brendanashworth/r3'] },
  r3: { slug: 'r3', packages: ['brendanashworth/r3'] },
  c9s: { slug: 'c9s', packages: ['brendanashworth/r3'] },
  lexer: { slug: 'lexer', packages: ['qute/qute'] },
  sophia: { slug: 'sophia', packages: ['clibs/sophia', 'sphia/sphia'] },
  'option-type': { slug: 'option-type', packages: ['daddinuz/option'] },
  monads: { slug: 'monads', packages: ['daddinuz/option'] },
  'functional-programming': {
    slug: 'functional-programming',
    packages: ['daddinuz/option']
  },
  pdf: { slug: 'pdf', packages: ['andrerenaud/pdfgen'] },
  document: { slug: 'document', packages: ['andrerenaud/pdfgen'] },
  'c-preprocessor': { slug: 'c-preprocessor', packages: ['madmurphy/zen.h'] },
  counter: { slug: 'counter', packages: ['madmurphy/zen.h'] },
  'c-preprocessor-counter': {
    slug: 'c-preprocessor-counter',
    packages: ['madmurphy/zen.h']
  },
  'c-macro': { slug: 'c-macro', packages: ['madmurphy/zen.h'] },
  'c-macros': { slug: 'c-macros', packages: ['madmurphy/zen.h'] },
  thread: { slug: 'thread', packages: ['jlcordeiro/threadpool'] },
  posix: { slug: 'posix', packages: ['jlcordeiro/threadpool'] },
  event: { slug: 'event', packages: ['clibs/trigger', 'willemt/event-timer'] },
  fire: { slug: 'fire', packages: ['clibs/trigger'] },
  firing: { slug: 'firing', packages: ['clibs/trigger'] },
  handle: { slug: 'handle', packages: ['clibs/trigger'] },
  handling: { slug: 'handling', packages: ['clibs/trigger'] },
  observe: { slug: 'observe', packages: ['clibs/trigger'] },
  publish: { slug: 'publish', packages: ['clibs/trigger'] },
  subscribe: { slug: 'subscribe', packages: ['clibs/trigger'] },
  trigger: { slug: 'trigger', packages: ['clibs/trigger'] },
  triggering: { slug: 'triggering', packages: ['clibs/trigger'] },
  error: { slug: 'error', packages: ['jwerle/throw.h'] },
  exception: { slug: 'exception', packages: ['jwerle/throw.h'] },
  throw: { slug: 'throw', packages: ['jwerle/throw.h'] },
  coroutine: { slug: 'coroutine', packages: ['clibs/coro'] },
  chan: { slug: 'chan', packages: ['tylertreat/chan'] },
  channel: { slug: 'channel', packages: ['tylertreat/chan'] },
  synchronization: { slug: 'synchronization', packages: ['tylertreat/chan'] },
  go: { slug: 'go', packages: ['tylertreat/chan'] },
  golang: { slug: 'golang', packages: ['tylertreat/chan'] },
  defer: { slug: 'defer', packages: ['trws/libdefer'] },
  goland: { slug: 'goland', packages: ['trws/libdefer'] },
  convenience: { slug: 'convenience', packages: ['trws/libdefer'] },
  exceptions: { slug: 'exceptions', packages: ['guillermocalvo/exceptions4c'] },
  'exceptions-for-c': {
    slug: 'exceptions-for-c',
    packages: ['guillermocalvo/exceptions4c']
  },
  'error-handling': {
    slug: 'error-handling',
    packages: ['guillermocalvo/exceptions4c']
  },
  closure: { slug: 'closure', packages: ['mobiushorizons/closure_module'] },
  mpp: { slug: 'mpp', packages: ['mobiushorizons/closure_module'] },
  function: { slug: 'function', packages: ['mobiushorizons/closure_module'] },
  scoped: { slug: 'scoped', packages: ['aperezdc/autocleanup'] },
  cleanup: { slug: 'cleanup', packages: ['aperezdc/autocleanup'] },
  pointers: { slug: 'pointers', packages: ['aperezdc/autocleanup'] },
  handles: { slug: 'handles', packages: ['aperezdc/autocleanup'] },
  testing: {
    slug: 'testing',
    packages: [
      'orangeduck/ptest',
      'stephenmathieson/describe.h',
      'jlcordeiro/minunit',
      'silentbicycle/greatest'
    ]
  },
  microtesting: { slug: 'microtesting', packages: ['orangeduck/ptest'] },
  DRY: { slug: 'dry', packages: ['orangeduck/ptest'] },
  ptest: { slug: 'ptest', packages: ['orangeduck/ptest'] },
  bdd: { slug: 'bdd', packages: ['stephenmathieson/describe.h'] },
  assert: {
    slug: 'assert',
    packages: [
      'stephenmathieson/describe.h',
      'stephenmathieson/assertion-macros.h',
      'aperezdc/apicheck',
      'daddinuz/traits'
    ]
  },
  describe: { slug: 'describe', packages: ['stephenmathieson/describe.h'] },
  tap: { slug: 'tap', packages: ['jwerle/libok', 'thlorenz/tap.c'] },
  test: {
    slug: 'test',
    packages: [
      'jwerle/libok',
      'thlorenz/tap.c',
      'silentbicycle/greatest',
      'daddinuz/traits-unit'
    ]
  },
  check: { slug: 'check', packages: ['thlorenz/tap.c'] },
  'tap.c': { slug: 'tap-c', packages: ['thlorenz/tap.c'] },
  unit: {
    slug: 'unit',
    packages: ['jlcordeiro/minunit', 'silentbicycle/greatest']
  },
  assertions: {
    slug: 'assertions',
    packages: ['stephenmathieson/assertion-macros.h', 'daddinuz/traits']
  },
  'unit test': { slug: 'unit-test', packages: ['willemt/cutest'] },
  assertion: { slug: 'assertion', packages: ['aperezdc/apicheck'] },
  'assertions-library': {
    slug: 'assertions-library',
    packages: ['daddinuz/traits']
  },
  unittest: { slug: 'unittest', packages: ['daddinuz/traits-unit'] },
  framework: { slug: 'framework', packages: ['daddinuz/traits-unit'] },
  'unit-test': { slug: 'unit-test', packages: ['daddinuz/traits-unit'] },
  unittesting: { slug: 'unittesting', packages: ['daddinuz/traits-unit'] },
  'unit-testing': { slug: 'unit-testing', packages: ['daddinuz/traits-unit'] },
  'test-framework': {
    slug: 'test-framework',
    packages: ['daddinuz/traits-unit']
  },
  time: { slug: 'time', packages: ['clibs/timestamp', 'clibs/timer'] },
  timestamp: { slug: 'timestamp', packages: ['clibs/timestamp'] },
  milliseconds: { slug: 'milliseconds', packages: ['clibs/timestamp'] },
  bench: {
    slug: 'bench',
    packages: ['clibs/bench.h', 'brendanashworth/bench']
  },
  timer: { slug: 'timer', packages: ['clibs/timer', 'willemt/event-timer'] },
  delta: { slug: 'delta', packages: ['clibs/timer'] },
  second: { slug: 'second', packages: ['clibs/timer'] },
  benchmark: { slug: 'benchmark', packages: ['brendanashworth/bench'] },
  speed: { slug: 'speed', packages: ['brendanashworth/bench'] },
  midi: { slug: 'midi', packages: ['opal-instruments/tiny-midi-clock'] },
  clock: { slug: 'clock', packages: ['opal-instruments/tiny-midi-clock'] },
  bpm: { slug: 'bpm', packages: ['opal-instruments/tiny-midi-clock'] },
  ppqn: { slug: 'ppqn', packages: ['opal-instruments/tiny-midi-clock'] },
  watch: { slug: 'watch', packages: ['visionmedia/watch', 'clibs/entr'] },
  process: { slug: 'process', packages: ['visionmedia/mon'] },
  monitoring: { slug: 'monitoring', packages: ['visionmedia/mon'] },
  monitor: { slug: 'monitor', packages: ['visionmedia/mon'] },
  availability: { slug: 'availability', packages: ['visionmedia/mon'] },
  histogram: { slug: 'histogram', packages: ['visionmedia/histo'] },
  chart: { slug: 'chart', packages: ['visionmedia/histo'] },
  plot: { slug: 'plot', packages: ['visionmedia/histo'] },
  stats: { slug: 'stats', packages: ['visionmedia/histo'] },
  statistics: { slug: 'statistics', packages: ['visionmedia/histo'] },
  extension: { slug: 'extension', packages: ['jb55/extname'] },
  sample: { slug: 'sample', packages: ['jb55/samp'] },
  sphia: { slug: 'sphia', packages: ['sphia/sphia'] },
  tabs: { slug: 'tabs', packages: ['stephenmathieson/tabs-to-spaces'] },
  spaces: { slug: 'spaces', packages: ['stephenmathieson/tabs-to-spaces'] },
  repl: { slug: 'repl', packages: ['hij1nx/ldb'] },
  fuse: { slug: 'fuse', packages: ['tomerdmnt/levelfs'] },
  cpu: { slug: 'cpu', packages: ['lavoiesl/osx-cpu-temp'] },
  temperature: { slug: 'temperature', packages: ['lavoiesl/osx-cpu-temp'] },
  sensors: { slug: 'sensors', packages: ['lavoiesl/osx-cpu-temp'] },
  make: { slug: 'make', packages: ['clibs/entr'] },
  entr: { slug: 'entr', packages: ['clibs/entr'] },
  install: { slug: 'install', packages: ['stephenmathieson/ghi'] },
  application: { slug: 'application', packages: ['jwerle/suri'] },
  scheme: { slug: 'scheme', packages: ['jwerle/suri'] },
  makeheaders: { slug: 'makeheaders', packages: ['andik/makeheaders'] },
  git: { slug: 'git', packages: ['nilsding/cnsc'] },
  commit: { slug: 'commit', packages: ['nilsding/cnsc'] },
  development: { slug: 'development', packages: ['nilsding/cnsc'] },
  angular: { slug: 'angular', packages: ['nilsding/cnsc'] },
  retrospring: { slug: 'retrospring', packages: ['nilsding/cnsc'] },
  glsl: {
    slug: 'glsl',
    packages: ['glisy/glisy-earth', 'glisy/glsl-checker-blur', 'glisy/glisy']
  },
  'stack.gl': {
    slug: 'stack-gl',
    packages: ['glisy/glisy-earth', 'glisy/glsl-checker-blur']
  },
  earth: { slug: 'earth', packages: ['glisy/glisy-earth'] },
  checker: { slug: 'checker', packages: ['glisy/glsl-checker-blur'] },
  blur: { slug: 'blur', packages: ['glisy/glsl-checker-blur'] },
  'ansicolor-w32': {
    slug: 'ansicolor-w32',
    packages: ['mattn/ansicolor-w32.c']
  },
  windows: { slug: 'windows', packages: ['mattn/ansicolor-w32.c'] },
  w32: { slug: 'w32', packages: ['mattn/ansicolor-w32.c'] },
  win32: { slug: 'win32', packages: ['mattn/ansicolor-w32.c'] },
  'dark mode': { slug: 'dark-mode', packages: ['onderweg/follow-the-sun'] },
  macos: { slug: 'macos', packages: ['onderweg/follow-the-sun'] },
  package: { slug: 'package', packages: ['clibs/clib-validate'] },
  bresenham: { slug: 'bresenham', packages: ['jb55/bresenham-line.c'] },
  trigonometry: {
    slug: 'trigonometry',
    packages: ['mauromombelli/trigonomec']
  },
  quaternion: { slug: 'quaternion', packages: ['mauromombelli/trigonomec'] },
  '3d': { slug: '3d', packages: ['mauromombelli/trigonomec'] },
  glisy: {
    slug: 'glisy',
    packages: ['glisy/math', 'glisy/glfw-shell', 'glisy/ease']
  },
  clamp: { slug: 'clamp', packages: ['littlstar/clamp'] },
  value: { slug: 'value', packages: ['littlstar/clamp'] },
  max7219: { slug: 'max7219', packages: ['opal-instruments/max7219-avr'] },
  avr: { slug: 'avr', packages: ['opal-instruments/max7219-avr'] },
  opengl: {
    slug: 'opengl',
    packages: ['glisy/glisy', 'littlstar/sop', 'littlstar/soil']
  },
  gl: {
    slug: 'gl',
    packages: [
      'glisy/glisy',
      'glisy/glfw-shell',
      'glisy/ease',
      'littlstar/soil'
    ]
  },
  open: { slug: 'open', packages: ['glisy/glfw-shell'] },
  glfw: { slug: 'glfw', packages: ['glisy/glfw-shell'] },
  easing: { slug: 'easing', packages: ['glisy/ease'] },
  obj: { slug: 'obj', packages: ['littlstar/sop'] },
  graphics: { slug: 'graphics', packages: ['littlstar/sop'] },
  soil: { slug: 'soil', packages: ['littlstar/soil'] },
  image: { slug: 'image', packages: ['littlstar/soil'] },
  leaks: { slug: 'leaks', packages: ['daddinuz/watchdog'] },
  'memory-leaks': { slug: 'memory-leaks', packages: ['daddinuz/watchdog'] },
  'memory-tracer': { slug: 'memory-tracer', packages: ['daddinuz/watchdog'] },
  'memory-leak-detection': {
    slug: 'memory-leak-detection',
    packages: ['daddinuz/watchdog']
  }
}

export const categories: CategoryList = {
  'String manipulation': {
    slug: 'string-manipulation',
    packages: [
      'clibs/buffer',
      'nami-doc/trim.c',
      'nami-doc/strlen.c',
      'jwerle/strsplit.h',
      'jwerle/chfreq.c',
      'hkjels/slug.c',
      'stephenmathieson/case.c',
      'stephenmathieson/occurrences.c',
      'stephenmathieson/path-join.c',
      'stephenmathieson/path-normalize.c',
      'jb55/extname.c',
      'stephenmathieson/rot13.c',
      'stephenmathieson/str-ends-with.c',
      'stephenmathieson/str-flatten.c',
      'stephenmathieson/str-replace.c',
      'stephenmathieson/str-starts-with.c',
      'stephenmathieson/substr.c',
      'stephenmathieson/trim.c',
      'dhobsd/vstring',
      'chrisdew/sds',
      'michaelrhodes/path-basename.c',
      'clibs/wildcardcmp',
      'littlstar/asprintf.c',
      'clibs/strndup',
      'clibs/strdup',
      'tingping/ustring',
      'wooorm/stmr.c',
      'gioyik/buffer-libc',
      'littlstar/trim.cc',
      'wooorm/levenshtein.c',
      'lib-x/xstr',
      'aperezdc/dbuf'
    ]
  },
  Utilities: {
    slug: 'utilities',
    packages: [
      'clibs/rgba',
      'clibs/unlikely',
      'aperezdc/cflag',
      'clibs/commander',
      'clibs/flag',
      'clibs/ms',
      'clibs/bytes',
      'clibs/term',
      'clibs/inih',
      'jb55/rotate-bits.h',
      'jwerle/url.h',
      'doches/progressbar',
      'jwerle/progress.h',
      'jwerle/repl.h',
      'jwerle/getch.c',
      'jwerle/usleep.h',
      'jwerle/libbacon',
      'jwerle/libbeaufort',
      'madmurphy/libconfini',
      'stephenmathieson/is-email.c',
      'thlorenz/gumbo-parser.c',
      'thlorenz/log.h',
      'sciascid/tree',
      'clehner/chains',
      'constellation/console-colors.c',
      'stephenmathieson/expand-braces.c',
      'stephenmathieson/wiki-registry.c',
      'xythobuz/serial',
      'clibs/mt19937ar',
      'willemt/config-re',
      'brendanashworth/genpassword.c',
      'clibs/dumpasn1',
      'orangeduck/luaautoc',
      'gioyik/color-sh',
      'gioyik/c_printf',
      'gioyik/slim_color',
      'nsf/termbox',
      'noporpoise/sort_r',
      'kdmurray91/clogged',
      'isty001/mem-pool',
      'alebcay/metric',
      'isty001/dotenv-c',
      'daddinuz/liblogger',
      'daddinuz/logger',
      'ararslan/termcolor-c',
      'daddinuz/arena',
      'abranhe/mergesort.c',
      'bonedaddy/ulog',
      'aperezdc/clog',
      'clibs/linenoise'
    ]
  },
  'Data structure': {
    slug: 'data-structure',
    packages: [
      'jmi2k/disjoint.h',
      'yrmt/arraylist',
      'clibs/hash',
      'clibs/list',
      'clibs/red-black-tree',
      'thlorenz/sync-stream.c',
      'troydhanson/uthash',
      'willemt/cbuffer',
      'willemt/bipbuffer',
      'willemt/heap',
      'willemt/pseudolru',
      'willemt/bag',
      'willemt/bitfield',
      'willemt/array-avl-tree',
      'willemt/linked-list-hashmap',
      'willemt/quadratic-probing-hashmap',
      'rxi/vec',
      'jlcordeiro/cmap',
      'willemt/skiplist',
      'willemt/linked-list-queue',
      'willemt/meanqueue',
      'willemt/chunkybar',
      'willemt/farraylist',
      'mbucc/cqueue',
      'clibs/lmdb',
      'willemt/arrayqueue',
      'ajaymt/dict.c',
      'ajaymt/list.c',
      'skeeto/lstack',
      'clehner/ll.c',
      'kellydunn/libkld',
      'willemt/duraqueue',
      'gioyik/mapc',
      'neylsongularte/simple-linked-list-c',
      'htmk/fat-array',
      'laserswald/dlist',
      'catb0t/sparse',
      'arablocks/flat-tree.c',
      'jwerle/libmerkle',
      'rikvdh/zabuffer',
      'rikvdh/zringbuf'
    ]
  },
  Parsing: {
    slug: 'parsing',
    packages: [
      'clibs/logfmt',
      'clibs/jsmn',
      'orangeduck/mpc',
      'willemt/torrent-reader',
      'mbucc/js0n',
      'jb55/field-range-parser.c',
      'jb55/querystring.c',
      'jb55/is_number.c',
      'brendanashworth/http-parser',
      'h2non/semver.c',
      'kgabis/parson',
      'rikvdh/matching'
    ]
  },
  'Encoding/Decoding': {
    slug: 'encoding-decoding',
    packages: [
      'clibs/rle',
      'clibs/snappy',
      'littlstar/uri.c',
      'mbucc/chtmlescape',
      'littlstar/b64.c',
      'jwerle/libutf8',
      'willemt/bitstream',
      'willemt/fe',
      'mikepb/endian.h',
      'lemire/simdcomp',
      'pepaslabs/hexify.c',
      'aperezdc/ulid-c',
      'adricoin2010/utf8-iterator',
      'jwerle/libsleepfile'
    ]
  },
  Filesystem: {
    slug: 'filesystem',
    packages: [
      'jwerle/fs.c',
      'stephenmathieson/mkdirp.c',
      'stephenmathieson/rimraf.c',
      'willemt/file2str',
      'willemt/stubfile',
      'stephenmathieson/tempdir.c',
      'willemt/pidfile',
      'cxong/tinydir',
      'isty001/copy',
      'clibs/which'
    ]
  },
  Hashing: {
    slug: 'hashing',
    packages: [
      'jwerle/murmurhash.c',
      'clibs/sha1',
      'jb55/sha256.c',
      'aperezdc/hmac-sha256',
      'zackehh/siphash-c',
      'catb0t/fnv-hash'
    ]
  },
  Encryption: { slug: 'encryption', packages: ['veqtrus/vial_aes'] },
  Net: {
    slug: 'net',
    packages: [
      'aisk/libae',
      'jb55/anet.c',
      'willemt/raft',
      'willemt/tracker-client',
      'willemt/pwp',
      'willemt/yabtorrent',
      'clibs/amp',
      'littlstar/request.cc',
      'daddinuz/http',
      'aperezdc/netdial',
      'clibs/http-get.c'
    ]
  },
  Libraries: {
    slug: 'libraries',
    packages: [
      'clibs/uv',
      'clibs/leveldb',
      'clibs/ck',
      'beltex/libsmc',
      'brendanashworth/r3',
      'qute/qute',
      'clibs/sophia',
      'daddinuz/option',
      'jwerle/libnanoresource',
      'jwerle/libram',
      'jwerle/libras',
      'jwerle/libalru',
      'andrerenaud/pdfgen'
    ]
  },
  'Preprocessor macros': {
    slug: 'preprocessor-macros',
    packages: ['madmurphy/zen.h']
  },
  'Program flow': {
    slug: 'program-flow',
    packages: [
      'jlcordeiro/threadpool',
      'jwerle/async.h',
      'stephenmathieson/batch.c',
      'clibs/trigger',
      'stephenmathieson/emitter.c',
      'jwerle/throw.h',
      'clibs/coro',
      'tylertreat/chan',
      'trws/libdefer',
      'willemt/uv_multiplex',
      'willemt/bmon',
      'guillermocalvo/exceptions4c',
      'mobiushorizons/closure_module',
      'aperezdc/autocleanup'
    ]
  },
  Serialization: {
    slug: 'serialization',
    packages: ['willemt/heapless-bencode', 'willemt/streaming-bencode']
  },
  'Testing/Quality Assurance': {
    slug: 'testing-quality-assurance',
    packages: [
      'orangeduck/ptest',
      'clibs/debug',
      'stephenmathieson/debug.c',
      'hij1nx/debug',
      'stephenmathieson/describe.h',
      'jwerle/libok',
      'thlorenz/tap.c',
      'jlcordeiro/minunit',
      'stephenmathieson/assertion-macros.h',
      'silentbicycle/greatest',
      'willemt/cutest',
      'jeradesign/minunit',
      'aperezdc/apicheck',
      'daddinuz/traits',
      'daddinuz/traits-unit'
    ]
  },
  Timing: {
    slug: 'timing',
    packages: [
      'clibs/timestamp',
      'clibs/bench.h',
      'clibs/timer',
      'willemt/event-timer',
      'brendanashworth/bench',
      'opal-instruments/tiny-midi-clock'
    ]
  },
  Executables: {
    slug: 'executables',
    packages: [
      'visionmedia/watch',
      'visionmedia/mon',
      'visionmedia/histo',
      'jb55/extname',
      'jb55/samp',
      'jb55/pidpath',
      'sphia/sphia',
      'stephenmathieson/tabs-to-spaces',
      'stephenmathieson/sophia-repl',
      'hij1nx/ldb',
      'tomerdmnt/levelfs',
      'lavoiesl/osx-cpu-temp',
      'clibs/entr',
      'stephenmathieson/ghi',
      'jwerle/suri',
      'wooorm/stmr',
      'andik/makeheaders',
      'wooorm/levenshtein',
      'nilsding/cnsc',
      'glisy/glisy-earth',
      'glisy/glsl-checker-blur'
    ]
  },
  'OS Specific': {
    slug: 'os-specific',
    packages: ['mattn/ansicolor-w32.c', 'onderweg/follow-the-sun']
  },
  Plugins: {
    slug: 'plugins',
    packages: ['clibs/clib-uninstall', 'clibs/clib-validate']
  },
  Math: {
    slug: 'math',
    packages: [
      'scientificc/cmathl',
      'jb55/bresenham-line.c',
      'mauromombelli/trigonomec',
      'willemt/minmax',
      'littlstar/clamp',
      'catb0t/yacbnl'
    ]
  },
  OpenGL: {
    slug: 'open-gl',
    packages: [
      'glisy/math',
      'glisy/glisy',
      'glisy/glfw-shell',
      'glisy/ease',
      'littlstar/sop',
      'littlstar/soil'
    ]
  },
  AVR: { slug: 'avr', packages: ['opal-instruments/max7219-avr'] },
  Profiling: { slug: 'profiling', packages: ['daddinuz/watchdog'] }
}

export const packages: Package[] = [
  {
    category: 'String manipulation',
    dependents: [],
    description: 'tiny c-string library',
    manifest: {
      name: 'clibs/buffer',
      version: '0.4.0',
      repo: 'clibs/buffer',
      description: 'Higher level C-string utilities',
      keywords: ['buf', 'buffer', 'string', 'str', 'util', 'utils'],
      license: 'MIT',
      src: ['buffer.c', 'buffer.h'],
      dependencies: {}
    },
    name: 'clibs/buffer',
    slug: 'clibs-buffer',
    url: 'https://github.com/clibs/buffer',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'trim a string, in place',
    manifest: {
      name: 'nami-doc/trim.c',
      version: '0.0.1',
      repo: 'vendethiel/trim.c',
      license: 'MIT',
      src: ['trim.c', 'trim.h'],
      keywords: [],
      dependencies: {}
    },
    name: 'nami-doc/trim.c',
    slug: 'nami-doc-trim-c',
    url: 'https://github.com/Nami-Doc/trim.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: "get a string's length",
    manifest: {
      name: 'nami-doc/strlen.c',
      version: '0.0.1',
      repo: 'nami-doc/strlen.c',
      license: 'MIT',
      src: ['strlen.c', 'strlen.h'],
      keywords: [],
      dependencies: {}
    },
    name: 'nami-doc/strlen.c',
    slug: 'nami-doc-strlen-c',
    url: 'https://github.com/Nami-Doc/strlen.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Split a string into a char array by a given delimiter',
    manifest: {
      name: 'jwerle/strsplit.h',
      version: '0.1.1',
      repo: 'jwerle/strsplit.c',
      description: 'Split a string into a char array by a given delimiter',
      keywords: ['string', 'split'],
      license: 'MIT',
      src: ['strsplit.h', 'strsplit.c'],
      dependencies: { 'clibs/strdup': '0.0.0' }
    },
    name: 'jwerle/strsplit.h',
    slug: 'jwerle-strsplit-h',
    url: 'https://github.com/jwerle/strsplit.h',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Compute character frequency in a string',
    manifest: {
      name: 'jwerle/chfreq.c',
      version: '0.0.1',
      repo: 'jwerle/chfreq.c',
      description: 'Compute character frequency in a string',
      keywords: ['char', 'frequency'],
      license: 'MIT',
      src: ['chfreq.h', 'chfreq.c'],
      dependencies: {}
    },
    name: 'jwerle/chfreq.c',
    slug: 'jwerle-chfreq-c',
    url: 'https://github.com/jwerle/chfreq.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Create slug from a given string.',
    manifest: {
      name: 'hkjels/slug.c',
      version: '0.0.1',
      repo: 'hkjels/slug.c',
      description: 'String -> Slug',
      keywords: ['string', 'slug', 'replace'],
      license: 'MIT',
      src: [
        'src/slug.c',
        'src/slug.h',
        'deps/case.c',
        'deps/case.h',
        'deps/trim.c',
        'deps/trim.h'
      ],
      dependencies: {}
    },
    name: 'hkjels/slug.c',
    slug: 'hkjels-slug-c',
    url: 'https://github.com/hkjels/slug.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'string case conversion',
    manifest: {
      name: 'stephenmathieson/case.c',
      version: '0.2.0',
      repo: 'stephenmathieson/case.c',
      description: 'String case conversion utility',
      keywords: ['string', 'uppercase', 'lowercase'],
      license: 'MIT',
      src: ['src/case.c', 'src/case.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/case.c',
    slug: 'stephenmathieson-case-c',
    url: 'https://github.com/stephenmathieson/case.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Count occurrences in a string',
    manifest: {
      name: 'stephenmathieson/occurrences.c',
      version: '1.0.0',
      repo: 'stephenmathieson/occurrences.c',
      description: 'Get the number of occurrences of `needle` in `haystack`',
      keywords: ['string', 'occurrences', 'count'],
      license: 'MIT',
      src: ['occurrences.c', 'occurrences.h'],
      development: { 'stephenmathieson/describe.h': '2.0.1' },
      dependencies: {}
    },
    name: 'stephenmathieson/occurrences.c',
    slug: 'stephenmathieson-occurrences-c',
    url: 'https://github.com/stephenmathieson/occurrences.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'join a path',
    manifest: {
      name: 'stephenmathieson/path-join.c',
      version: '0.0.6',
      repo: 'stephenmathieson/path-join.c',
      description: 'Join a path',
      keywords: ['path', 'join', 'directory', 'file'],
      license: 'MIT',
      src: ['src/path-join.c', 'src/path-join.h'],
      dependencies: {
        'stephenmathieson/str-starts-with.c': '*',
        'stephenmathieson/str-ends-with.c': '*',
        'clibs/strdup': '0.0.0'
      }
    },
    name: 'stephenmathieson/path-join.c',
    slug: 'stephenmathieson-path-join-c',
    url: 'https://github.com/stephenmathieson/path-join.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'normalize a path',
    manifest: {
      name: 'stephenmathieson/path-normalize.c',
      version: '0.0.6',
      repo: 'stephenmathieson/path-normalize.c',
      description: 'Normalize a path',
      keywords: ['path', 'directory', 'normalize'],
      license: 'MIT',
      src: ['src/path-normalize.c', 'src/path-normalize.h'],
      dependencies: { 'clibs/strdup': '0.0.0' }
    },
    name: 'stephenmathieson/path-normalize.c',
    slug: 'stephenmathieson-path-normalize-c',
    url: 'https://github.com/stephenmathieson/path-normalize.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'get the extension of a file from a path',
    manifest: {
      name: 'jb55/extname.c',
      version: '1.1.0',
      repo: 'jb55/extname.c',
      description: 'Get a files extension',
      keywords: ['extname', 'ext'],
      license: 'MIT',
      src: ['src/extname.c', 'src/extname.h'],
      dependencies: {}
    },
    name: 'jb55/extname.c',
    slug: 'jb55-extname-c',
    url: 'https://github.com/jb55/extname.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Simple ROT13',
    manifest: {
      name: 'stephenmathieson/rot13.c',
      version: '0.0.1',
      repo: 'stephenmathieson/rot13.c',
      description: 'Simple ROT13',
      keywords: ['rot13', 'rotate', 'encryption'],
      license: 'MIT',
      src: ['src/rot13.c', 'src/rot13.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/rot13.c',
    slug: 'stephenmathieson-rot13-c',
    url: 'https://github.com/stephenmathieson/rot13.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: ['stephenmathieson/path-join.c'],
    description: 'Check if a string ends with another string',
    manifest: {
      name: 'stephenmathieson/str-ends-with.c',
      version: '0.0.3',
      repo: 'stephenmathieson/str-ends-with.c',
      description: 'Check if a string ends with another string',
      keywords: ['string'],
      license: 'MIT',
      src: ['src/str-ends-with.c', 'src/str-ends-with.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/str-ends-with.c',
    slug: 'stephenmathieson-str-ends-with-c',
    url: 'https://github.com/stephenmathieson/str-ends-with.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Flatten a char array',
    manifest: {
      name: 'stephenmathieson/str-flatten.c',
      version: '0.0.4',
      repo: 'stephenmathieson/str-flatten.c',
      description: 'Flatten a char array, ripped out of sphia(1)',
      keywords: ['string', 'flatten', 'join'],
      license: 'MIT',
      src: ['src/str-flatten.c', 'src/str-flatten.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/str-flatten.c',
    slug: 'stephenmathieson-str-flatten-c',
    url: 'https://github.com/stephenmathieson/str-flatten.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'string replacement',
    manifest: {
      name: 'stephenmathieson/str-replace.c',
      version: '0.0.6',
      repo: 'stephenmathieson/str-replace.c',
      description: 'String replacement in C',
      keywords: ['string', 'replace'],
      license: 'MIT',
      src: ['src/str-replace.c', 'src/str-replace.h'],
      dependencies: {
        'stephenmathieson/occurrences.c': '*',
        'clibs/strdup': '*'
      },
      development: { 'stephenmathieson/describe.h': '2.0.2' }
    },
    name: 'stephenmathieson/str-replace.c',
    slug: 'stephenmathieson-str-replace-c',
    url: 'https://github.com/stephenmathieson/str-replace.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: ['stephenmathieson/path-join.c'],
    description: 'Check if a string starts with another string',
    manifest: {
      name: 'stephenmathieson/str-starts-with.c',
      version: '0.0.3',
      repo: 'stephenmathieson/str-starts-with.c',
      description: 'Check if a string starts with another string',
      keywords: ['string'],
      license: 'MIT',
      src: ['src/str-starts-with.c', 'src/str-starts-with.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/str-starts-with.c',
    slug: 'stephenmathieson-str-starts-with-c',
    url: 'https://github.com/stephenmathieson/str-starts-with.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Get a substring of a string',
    manifest: {
      name: 'stephenmathieson/substr.c',
      version: '0.1.2',
      repo: 'stephenmathieson/substr.c',
      description: 'Get a substring of a string',
      keywords: ['substr', 'substring', 'string'],
      license: 'MIT',
      src: ['src/substr.c', 'src/substr.h'],
      dependencies: { 'clibs/strdup': '0.0.0' },
      development: { 'stephenmathieson/describe.h': '*' }
    },
    name: 'stephenmathieson/substr.c',
    slug: 'stephenmathieson-substr-c',
    url: 'https://github.com/stephenmathieson/substr.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'string trim with left and right support',
    manifest: {
      name: 'stephenmathieson/trim.c',
      version: '0.0.2',
      repo: 'stephenmathieson/trim.c',
      description: 'String trim utility',
      keywords: ['string', 'trim', 'trim left', 'trim right'],
      license: 'MIT',
      src: ['src/trim.c', 'src/trim.h'],
      development: { 'stephenmathieson/describe.h': 'master' },
      dependencies: {}
    },
    name: 'stephenmathieson/trim.c',
    slug: 'stephenmathieson-trim-c',
    url: 'https://github.com/stephenmathieson/trim.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'A simple string building API for C',
    manifest: {
      name: 'dhobsd/vstring',
      version: '0.0.2',
      description:
        'Vstring is a simple string building API for the C programming language',
      repo: 'dhobsd/vstring',
      src: ['vstring.h'],
      repository: { type: 'git', url: 'git@github.com:dhobsd/vstring.git' },
      keywords: ['buffer', 'string'],
      author: "Devon H. O'Dell",
      bugs: { url: 'https://github.com/dhobsd/vstring/issues' },
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'dhobsd/vstring',
    slug: 'dhobsd-vstring',
    url: 'https://github.com/dhobsd/vstring',
    license: 'Unlicensed'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: "Antirez's Simple Dynamic Strings library",
    manifest: {
      name: 'chrisdew/sds',
      version: '0.0.0',
      repo: 'chrisdew/sds',
      description: 'Simple Dynamic Strings library for C',
      keywords: ['strings', 'string'],
      license: 'BSD',
      src: ['sds.h', 'sds.c'],
      dependencies: {}
    },
    name: 'chrisdew/sds',
    slug: 'chrisdew-sds',
    url: 'https://github.com/chrisdew/sds',
    license: 'BSD'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description:
      'Find the last portion of a path. Similar to Node’s path.basename method.',
    manifest: {
      name: 'michaelrhodes/path-basename.c',
      version: '0.0.1',
      repo: 'michaelrhodes/path-basename.c',
      description:
        'Find the last portion of a path. Similar to Node’s path.basename method.',
      keywords: ['path', 'basename'],
      license: 'MIT',
      src: ['src/path-basename.c', 'src/path-basename.h'],
      dependencies: { 'stephenmathieson/str-replace.c': '0.0.5' }
    },
    name: 'michaelrhodes/path-basename.c',
    slug: 'michaelrhodes-path-basename-c',
    url: 'https://github.com/michaelrhodes/path-basename.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Simple wildcard string comparison for C',
    manifest: {
      name: 'clibs/wildcardcmp',
      version: '0.0.0',
      repo: 'clibs/wildcardcmp',
      description: 'simple wildcard string comparison',
      keywords: ['wildcard', 'string', 'comparison'],
      license: 'MIT',
      src: ['wildcardcmp.c', 'wildcardcmp.h'],
      dependencies: {}
    },
    name: 'clibs/wildcardcmp',
    slug: 'clibs-wildcardcmp',
    url: 'https://github.com/clibs/wildcardcmp',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'asprintf() implementation',
    manifest: {
      name: 'littlstar/asprintf.c',
      version: '0.0.3',
      repo: 'littlstar/asprintf.c',
      description: 'asprintf() implementation',
      keywords: ['asprintf', 'sprintf', 'alloc', 'string'],
      src: ['asprintf.h', 'asprintf.c'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'littlstar/asprintf.c',
    slug: 'littlstar-asprintf-c',
    url: 'https://github.com/littlstar/asprintf.c',
    license: 'Unlicensed'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Safe implementation of strndup',
    manifest: {
      name: 'clibs/strndup',
      version: '0.0.1',
      repo: 'clibs/strndup',
      description:
        'strndup implementation. Useful when unavailable on your platform.',
      keywords: ['string'],
      license: 'public domain',
      src: ['strndup.c', 'strndup.h'],
      dependencies: {}
    },
    name: 'clibs/strndup',
    slug: 'clibs-strndup',
    url: 'https://github.com/clibs/strndup',
    license: 'public domain'
  },
  {
    category: 'String manipulation',
    dependents: [
      'jwerle/strsplit.h',
      'stephenmathieson/path-join.c',
      'stephenmathieson/path-normalize.c',
      'stephenmathieson/str-replace.c',
      'stephenmathieson/substr.c'
    ],
    description: 'Safe implementation of strdup',
    manifest: {
      name: 'clibs/strdup',
      version: '0.1.5',
      repo: 'clibs/strdup',
      description: 'drop-in replacement for strdup(3) from libc',
      keywords: ['string', 'copy'],
      license: 'Expat',
      src: ['strdup.c', 'strdup.h'],
      dependencies: {}
    },
    name: 'clibs/strdup',
    slug: 'clibs-strdup',
    url: 'https://github.com/clibs/strdup',
    license: 'Expat'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Utils for safely handling utf8 strings.',
    manifest: {
      name: 'tingping/ustring',
      version: '0.1',
      repo: 'TingPing/ustring',
      description: 'Utils for safely handling utf8 strings.',
      license: 'MIT',
      src: ['src/ustring.c', 'src/ustring.h'],
      keywords: ['c99', 'unicode', 'utf8', 'utf-8'],
      dependencies: {}
    },
    name: 'tingping/ustring',
    slug: 'ting-ping-ustring',
    url: 'https://github.com/TingPing/ustring',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Porter Stemmer algorithm',
    manifest: {
      name: 'wooorm/stmr.c',
      version: '1.0.0',
      description: 'The Porter Stemmer algorithm',
      license: 'MIT',
      keywords: ['martin', 'porter', 'stemmer', 'algorithm'],
      repo: 'wooorm/stmr.c',
      src: ['stmr.h', 'stmr.c'],
      dependencies: {}
    },
    name: 'wooorm/stmr.c',
    slug: 'wooorm-stmr-c',
    url: 'https://github.com/wooorm/stmr.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Buffer C lib',
    manifest: {
      name: 'gioyik/buffer-libc',
      version: '0.0.1',
      repo: 'Gioyik/buffer-libc',
      description: 'Buffer C lib ',
      keywords: ['buffer', 'c', 'lib'],
      license: 'MIT',
      src: ['src/buffer.c', 'src/buffer.h'],
      dependencies: {}
    },
    name: 'gioyik/buffer-libc',
    slug: 'gioyik-buffer-libc',
    url: 'https://github.com/Gioyik/buffer-libc',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'C++ std::string trim util',
    manifest: {
      name: 'littlstar/trim.cc',
      version: '0.1.2',
      repo: 'littlstar/trim.cc',
      description: 'std::string trim utility',
      keywords: ['string', 'trim', 'trim left', 'trim right'],
      license: 'MIT',
      src: ['trim.cc', 'trim.h'],
      dependencies: {}
    },
    name: 'littlstar/trim.cc',
    slug: 'littlstar-trim-cc',
    url: 'https://github.com/littlstar/trim.cc',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Levenshtein’s string edit distance algorithm',
    manifest: {
      name: 'wooorm/levenshtein.c',
      version: '2.0.1',
      description: 'Levenshtein algorithm',
      license: 'MIT',
      keywords: ['Vladimir', 'Levenshtein', 'algorithm', 'edit', 'distance'],
      repo: 'wooorm/levenshtein.c',
      src: ['levenshtein.h', 'levenshtein.c'],
      dependencies: {}
    },
    name: 'wooorm/levenshtein.c',
    slug: 'wooorm-levenshtein-c',
    url: 'https://github.com/wooorm/levenshtein.c',
    license: 'MIT'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'A simple public domain string library',
    manifest: {
      name: 'lib-x/xstr',
      version: '0.2.2',
      repo: 'lib-x/xstr',
      description: 'A simple public-domain string library',
      keywords: [
        'xstr',
        'string',
        'str',
        'strings',
        'list',
        'simple',
        'utilities',
        'utility',
        'util',
        'utils'
      ],
      license: 'Unlicense',
      src: ['src/str.c', 'src/str.h'],
      dependencies: {}
    },
    name: 'lib-x/xstr',
    slug: 'lib-x-xstr',
    url: 'https://github.com/lib-x/xstr',
    license: 'Unlicense'
  },
  {
    category: 'String manipulation',
    dependents: [],
    description: 'Resizable data buffer.',
    manifest: {
      name: 'aperezdc/dbuf',
      version: '0.1.0',
      repo: 'aperezdc/dbuf',
      description: 'Resizable data buffers',
      license: 'MIT',
      keywords: ['dynamic', 'data', 'buffer'],
      src: ['dbuf.h', 'dbuf.c'],
      dependencies: {}
    },
    name: 'aperezdc/dbuf',
    slug: 'aperezdc-dbuf',
    url: 'https://github.com/aperezdc/dbuf',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'rgba color string parser',
    manifest: {
      name: 'clibs/rgba',
      version: '0.0.1',
      repo: 'clibs/rgba',
      description: 'RGB / RGBA parsing and formatting functions',
      keywords: ['color', 'rgb', 'rgba', 'parse', 'formatter'],
      license: 'MIT',
      src: ['src/rgba.c', 'src/rgba.h'],
      dependencies: {}
    },
    name: 'clibs/rgba',
    slug: 'clibs-rgba',
    url: 'https://github.com/clibs/rgba',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'gcc branch prediction macros',
    manifest: {
      name: 'clibs/unlikely',
      version: '0.0.1',
      repo: 'clibs/unlikely',
      description: 'Branch prediction macros for gcc',
      keywords: ['unlikely', 'branch', 'prediction', 'macro'],
      license: 'MIT',
      src: ['unlikely.h'],
      dependencies: {}
    },
    name: 'clibs/unlikely',
    slug: 'clibs-unlikely',
    url: 'https://github.com/clibs/unlikely',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Non-allocating command line flag parser',
    manifest: {
      name: 'aperezdc/cflag',
      version: '1.1.1',
      repo: 'aperezdc/cflag',
      description: 'Non-allocating command line flag parser',
      license: 'MIT',
      keywords: ['cli', 'flag', 'options', 'parser'],
      src: ['cflag.h', 'cflag.c'],
      dependencies: {}
    },
    name: 'aperezdc/cflag',
    slug: 'aperezdc-cflag',
    url: 'https://github.com/aperezdc/cflag',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'expressive argument parser',
    manifest: {
      name: 'clibs/commander',
      version: '1.3.2',
      repo: 'clibs/commander',
      description: 'Command-line argument parser',
      keywords: ['cli', 'command', 'parser', 'argv', 'args', 'options'],
      license: 'MIT',
      src: ['src/commander.h', 'src/commander.c'],
      dependencies: {}
    },
    name: 'clibs/commander',
    slug: 'clibs-commander',
    url: 'https://github.com/clibs/commander',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Go style flag parsing',
    manifest: {
      name: 'clibs/flag',
      version: '0.0.1',
      repo: 'clibs/flag',
      description: 'Go-style flag parsing for C programs',
      keywords: [
        'cli',
        'command',
        'parser',
        'argv',
        'args',
        'options',
        'flag',
        'flags'
      ],
      license: 'MIT',
      src: ['flag.h', 'flag.c'],
      dependencies: {}
    },
    name: 'clibs/flag',
    slug: 'clibs-flag',
    url: 'https://github.com/clibs/flag',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'millisecond parser / formatter util',
    manifest: {
      name: 'clibs/ms',
      version: '0.0.4',
      repo: 'clibs/ms',
      description: 'String to microsecond & millisecond utilities',
      keywords: [
        'ms',
        'us',
        'usec',
        'millisecond',
        'microsecond',
        'conversion',
        'convert'
      ],
      license: 'MIT',
      src: ['ms.c', 'ms.h'],
      dependencies: { 'littlstar/asprintf.c': '0.0.3' }
    },
    name: 'clibs/ms',
    slug: 'clibs-ms',
    url: 'https://github.com/clibs/ms',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'byte-length parser / formatter util',
    manifest: {
      name: 'clibs/bytes',
      version: '0.0.4',
      repo: 'clibs/bytes',
      description: 'Byte string and number conversion utilities',
      keywords: ['bytes', 'string', 'size'],
      license: 'MIT',
      src: ['bytes.c', 'bytes.h'],
      dependencies: {}
    },
    name: 'clibs/bytes',
    slug: 'clibs-bytes',
    url: 'https://github.com/clibs/bytes',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'terminal utilities',
    manifest: {
      name: 'clibs/term',
      version: '0.0.2',
      repo: 'clibs/term',
      description: 'Terminal ansi escape goodies',
      keywords: [
        'terminal',
        'term',
        'tty',
        'ansi',
        'escape',
        'colors',
        'console'
      ],
      license: 'MIT',
      src: ['src/term.c', 'src/term.h'],
      dependencies: {}
    },
    name: 'clibs/term',
    slug: 'clibs-term',
    url: 'https://github.com/clibs/term',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'INI parser',
    manifest: {
      name: 'clibs/inih',
      version: '0.0.0',
      repo: 'clibs/inih',
      description: 'simple .INI file parser',
      keywords: ['ini', 'parser'],
      license: 'BSD',
      src: ['ini.c', 'ini.h'],
      dependencies: {}
    },
    name: 'clibs/inih',
    slug: 'clibs-inih',
    url: 'https://github.com/clibs/inih',
    license: 'BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'bitwise rotations',
    manifest: {
      name: 'jb55/rotate-bits.h',
      version: '0.1.1',
      repo: 'jb55/rotate-bits.h',
      description: 'rotate bits',
      keywords: ['rotl', 'rotr'],
      src: ['rotate-bits.h'],
      license: 'Public Domain',
      development: { 'thlorenz/tap.c': '*' },
      dependencies: {}
    },
    name: 'jb55/rotate-bits.h',
    slug: 'jb55-rotate-bits-h',
    url: 'https://github.com/jb55/rotate-bits.h',
    license: 'Public Domain'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: "Parse URLs in C much like Node's url module.",
    manifest: {
      name: 'jwerle/url.h',
      version: '0.2.0',
      repo: 'jwerle/url.h',
      description: "Parse URLs much like Node's url module",
      keywords: ['url', 'parse'],
      license: 'MIT',
      makefile: 'Makefile',
      src: ['url.h', 'url.c'],
      dependencies: {}
    },
    name: 'jwerle/url.h',
    slug: 'jwerle-url-h',
    url: 'https://github.com/jwerle/url.h',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'A library for displaying command-line progress bars',
    manifest: {
      name: 'doches/progressbar',
      version: '0.1.0',
      repo: 'doches/progressbar',
      description: 'A C library for displaying command-line progress bars',
      keywords: [
        'terminal',
        'tty',
        'progress',
        'progressbar',
        'statusbar',
        'console'
      ],
      license: 'BSD',
      src: [
        'include/progressbar/progressbar.h',
        'lib/progressbar.c',
        'include/progressbar/statusbar.h',
        'lib/statusbar.c'
      ],
      dependencies: {}
    },
    name: 'doches/progressbar',
    slug: 'doches-progressbar',
    url: 'https://github.com/doches/progressbar',
    license: 'BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Progress display lib for c',
    manifest: {
      name: 'jwerle/progress.h',
      version: '0.4.0',
      repo: 'jwerle/progress.c',
      description: 'Simple progress bar display for the terminal',
      keywords: ['terminal', 'tty', 'progress'],
      license: 'MIT',
      makefile: 'Makefile',
      src: ['progress.h', 'progress.c', 'Makefile'],
      dependencies: {}
    },
    name: 'jwerle/progress.h',
    slug: 'jwerle-progress-h',
    url: 'https://github.com/jwerle/progress.h',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'Create a repl with eval/print/error hooks with given stdin, stdout, and stderr streams',
    manifest: {
      name: 'jwerle/repl.h',
      version: '0.0.1',
      repo: 'jwerle/repl.h',
      description:
        'Create a repl with eval/print/error hooks with given stdin, stdout, and stderr streams',
      keywords: [],
      license: 'MIT',
      src: [
        'src/buffer.c',
        'src/buffer.h',
        'src/error.c',
        'src/error.h',
        'src/eval.c',
        'src/eval.h',
        'src/init.c',
        'src/init.h',
        'src/loop.c',
        'src/loop.h',
        'src/print.c',
        'src/print.h',
        'src/read.c',
        'src/read.h',
        'src/term.c',
        'src/term.h',
        'src/repl.h'
      ],
      dependencies: {}
    },
    name: 'jwerle/repl.h',
    slug: 'jwerle-repl-h',
    url: 'https://github.com/jwerle/repl.h',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'getch() implementation',
    manifest: {
      name: 'jwerle/getch.c',
      version: '0.0.2',
      repo: 'jwerle/getch.c',
      description: 'getch() implementation',
      keywords: ['char', 'getch'],
      license: 'MIT',
      src: ['getch.h', 'getch.c'],
      dependencies: {}
    },
    name: 'jwerle/getch.c',
    slug: 'jwerle-getch-c',
    url: 'https://github.com/jwerle/getch.c',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'usleep implementation using poll() or select()',
    manifest: {
      name: 'jwerle/usleep.h',
      version: '0.1.0',
      repo: 'jwerle/usleep.h',
      description: 'usleep implementation using poll() or select()',
      keywords: ['usleep'],
      license: 'MIT',
      src: ['usleep.h'],
      dependencies: {}
    },
    name: 'jwerle/usleep.h',
    slug: 'jwerle-usleep-h',
    url: 'https://github.com/jwerle/usleep.h',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'A C implementation of the Baconian Cipher ! BACON',
    manifest: {
      name: 'jwerle/libbacon',
      version: '0.0.8',
      repo: 'jwerle/libbacon',
      description: 'A C implementation of the Baconian Cipher',
      keywords: ['bacon', 'baconian', 'cipher'],
      license: 'MIT',
      src: ['include/bacon.h', 'src/encode.c', 'src/decode.c'],
      dependencies: {}
    },
    name: 'jwerle/libbacon',
    slug: 'jwerle-libbacon',
    url: 'https://github.com/jwerle/libbacon',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'A C implementation of the Beaufort Cipher',
    manifest: {
      name: 'jwerle/libbeaufort',
      version: '0.0.2',
      repo: 'jwerle/libbeaufort',
      description: 'A C implementation of the Beaufort Cipher',
      keywords: ['beaufort', 'cipher'],
      license: 'MIT',
      src: [
        'include/beaufort.h',
        'src/encrypt.c',
        'src/decrypt.c',
        'src/tableau.c'
      ],
      dependencies: {}
    },
    name: 'jwerle/libbeaufort',
    slug: 'jwerle-libbeaufort',
    url: 'https://github.com/jwerle/libbeaufort',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Yet another INI parser',
    manifest: {
      name: 'madmurphy/libconfini',
      version: '1.16.1',
      description: 'Yet another INI parser',
      homepage: 'https://madmurphy.github.io/libconfini',
      author: 'madmurphy333@gmail.com',
      license: 'GPL-3.0-or-later',
      main: 'libconfini',
      binaryVersion: '0.5.0',
      repo: 'madmurphy/libconfini',
      repository: {
        type: 'git',
        url: 'https://github.com/madmurphy/libconfini.git'
      },
      src: ['src/confini.c', 'src/confini.h'],
      bugs: {
        url: 'https://github.com/madmurphy/libconfini/issues',
        email: 'madmurphy333@gmail.com'
      },
      man: [
        'docs/man/man3/confini.h.3',
        'docs/man/man3/IniDispatch.3',
        'docs/man/man3/IniFormat.3',
        'docs/man/man3/IniStatistics.3',
        'docs/man/man3/libconfini.3'
      ],
      keywords: [
        'bare-metal',
        'c',
        'conf',
        'conf-file',
        'conf-library',
        'config',
        'configuration',
        'configuration-file',
        'configuration-management',
        'cstring',
        'gnu',
        'ini',
        'ini-config',
        'ini-file',
        'ini-library',
        'ini-parser',
        'ini-reader',
        'library',
        'parser',
        'shared-library',
        'unix'
      ],
      dependencies: {}
    },
    name: 'madmurphy/libconfini',
    slug: 'madmurphy-libconfini',
    url: 'https://github.com/madmurphy/libconfini',
    license: 'GPL-3.0-or-later'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Loosely validate an email address',
    manifest: {
      name: 'stephenmathieson/is-email.c',
      version: '0.0.2',
      repo: 'stephenmathieson/is-email.c',
      description: 'Loosely validate an email address',
      keywords: ['email', 'validate'],
      license: 'MIT',
      src: ['src/is-email.c', 'src/is-email.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/is-email.c',
    slug: 'stephenmathieson-is-email-c',
    url: 'https://github.com/stephenmathieson/is-email.c',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'HTML5 parser',
    manifest: {
      name: 'thlorenz/gumbo-parser.c',
      version: '0.1.0',
      description:
        'Gumbo - A pure-C HTML5 parser, adapted to be installable via clib.',
      directories: { src: 'src' },
      src: [
        'src/attribute.c',
        'src/attribute.h',
        'src/char_ref.c',
        'src/char_ref.h',
        'src/error.c',
        'src/error.h',
        'src/gumbo.h',
        'src/insertion_mode.h',
        'src/parser.c',
        'src/parser.h',
        'src/string_buffer.c',
        'src/string_buffer.h',
        'src/string_piece.c',
        'src/string_piece.h',
        'src/tag.c',
        'src/token_type.h',
        'src/tokenizer.c',
        'src/tokenizer.h',
        'src/tokenizer_states.h',
        'src/utf8.c',
        'src/utf8.h',
        'src/util.c',
        'src/util.h',
        'src/vector.c',
        'src/vector.h'
      ],
      scripts: {},
      repository: {
        type: 'git',
        url: 'git://github.com/thlorenz/gumbo-parser.c.git'
      },
      keywords: ['parse', 'html', 'html5', 'clib'],
      author: 'Thorsten Lorenz <thlorenz@gmx.de> (http://thlorenz.com/)',
      license: 'Apache License, Version 2.0',
      gypfile: true,
      bugs: { url: 'https://github.com/thlorenz/gumbo-parser.c/issues' },
      dependencies: {}
    },
    name: 'thlorenz/gumbo-parser.c',
    slug: 'thlorenz-gumbo-parser-c',
    url: 'https://github.com/thlorenz/gumbo-parser.c',
    license: 'Apache License, Version 2.0'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Minimal yet colorful logging lib',
    manifest: {
      name: 'thlorenz/log.h',
      main: 'log.h',
      version: '0.3.0',
      description: 'Minimal yet colorful logging lib.',
      repository: { type: 'git', url: 'git://github.com/thlorenz/log.h.git' },
      src: ['log.h'],
      homepage: 'https://github.com/thlorenz/log.h',
      keywords: ['log', 'debug', 'print', 'diagnostics'],
      author: {
        name: 'Thorsten Lorenz',
        email: 'thlorenz@gmx.de',
        url: 'http://thlorenz.com'
      },
      license: 'MIT',
      dependencies: {}
    },
    name: 'thlorenz/log.h',
    slug: 'thlorenz-log-h',
    url: 'https://github.com/thlorenz/log.h',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'convenient wrapper around BSD sys/tree.h.',
    manifest: {
      name: 'sciascid/tree',
      version: '0.0.1',
      repo: 'sciascid/tree',
      description: 'Convenient wrapper around sys/tree.h.',
      keywords: ['tree', 'red-black', 'splay', 'container'],
      license: 'BSD',
      src: ['tree.h', 'sys_tree.h'],
      dependencies: {}
    },
    name: 'sciascid/tree',
    slug: 'sciascid-tree',
    url: 'https://github.com/sciascid/tree',
    license: 'BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Markov chains',
    manifest: {
      name: 'clehner/chains',
      version: '0.1.1',
      repo: 'clehner/chains',
      description: 'Markov chains',
      keywords: ['markov', 'chains'],
      license: 'MIT',
      dependencies: { 'clibs/hash': '*' },
      src: ['src/chains.c', 'src/chains.h']
    },
    name: 'clehner/chains',
    slug: 'clehner-chains',
    url: 'https://github.com/clehner/chains',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Write formatted string to console with colors',
    manifest: {
      name: 'constellation/console-colors.c',
      version: '1.0.3',
      repo: 'Constellation/console-colors.c',
      description: 'Write formatted string to console with colors',
      keywords: ['console', 'color'],
      license: 'BSD',
      src: ['console-colors.c', 'console-colors.h'],
      dependencies: {}
    },
    name: 'constellation/console-colors.c',
    slug: 'constellation-console-colors-c',
    url: 'https://github.com/Constellation/console-colors.c',
    license: 'BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Simple shell-like brace expansion',
    manifest: {
      name: 'stephenmathieson/expand-braces.c',
      repo: 'stephenmathieson/expand-braces.c',
      version: '0.0.1',
      src: ['expand-braces.h', 'expand-braces.c'],
      keywords: [],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'stephenmathieson/expand-braces.c',
    slug: 'stephenmathieson-expand-braces-c',
    url: 'https://github.com/stephenmathieson/expand-braces.c',
    license: 'Unlicensed'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Turn a GitHub wiki page into a package registry',
    manifest: {
      name: 'stephenmathieson/wiki-registry.c',
      version: '0.0.4',
      repo: 'stephenmathieson/wiki-registry.c',
      description: 'Turn a GitHub Wiki page into a package registry',
      keywords: ['registry', 'github', 'wiki'],
      license: 'MIT',
      src: ['src/wiki-registry.c', 'src/wiki-registry.h'],
      dependencies: {
        'thlorenz/gumbo-parser.c': '*',
        'stephenmathieson/substr.c': '*',
        'stephenmathieson/http-get.c': '*',
        'stephenmathieson/case.c': '*',
        'stephenmathieson/trim.c': '*',
        'stephenmathieson/gumbo-text-content.c': '*',
        'stephenmathieson/gumbo-get-element-by-id.c': '*',
        'stephenmathieson/gumbo-get-elements-by-tag-name.c': '*',
        'clibs/list': '*',
        'clibs/strdup': '0.0.0'
      }
    },
    name: 'stephenmathieson/wiki-registry.c',
    slug: 'stephenmathieson-wiki-registry-c',
    url: 'https://github.com/stephenmathieson/wiki-registry.c',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'POSIX serial port interface with optional flow control support.',
    manifest: {
      name: 'xythobuz/serial',
      version: '0.0.1',
      repo: 'xythobuz/serial',
      description: 'Easy serial port usage with optional XON/XOFF flow control',
      keywords: ['terminal', 'term', 'tty', 'console', 'serial'],
      license: 'MIT',
      src: ['src/serial.c', 'src/serial.h'],
      dependencies: {}
    },
    name: 'xythobuz/serial',
    slug: 'xythobuz-serial',
    url: 'https://github.com/xythobuz/serial',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Mersenne Twister random number generator',
    manifest: {
      name: 'clibs/mt19937ar',
      version: '0.0.1',
      repo: 'clibs/mt19937ar',
      description: 'Mersenne Twister random number generator',
      keywords: ['Mersenne Twister', 'random'],
      license: 'BSD style',
      src: ['mt19937ar.c', 'mt19937ar.h'],
      dependencies: {}
    },
    name: 'clibs/mt19937ar',
    slug: 'clibs-mt19937ar',
    url: 'https://github.com/clibs/mt19937ar',
    license: 'BSD style'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Data structure allows your program to be configured',
    manifest: {
      name: 'willemt/config-re',
      version: '0.0.1',
      repo: 'willemt/config-re',
      description:
        'Library that allows you to have configuration within your program',
      keywords: ['configuration'],
      license: 'BSD',
      src: ['config.c', 'config.h', 'list.c', 'list.h'],
      dependencies: {}
    },
    name: 'willemt/config-re',
    slug: 'willemt-config-re',
    url: 'https://github.com/willemt/config-re',
    license: 'BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Random password generating library',
    manifest: {
      name: 'brendanashworth/genpassword.c',
      version: '0.0.1',
      repo: 'boboman13/genpassword.c',
      description: 'Random password generating library, in C',
      keywords: ['password', 'generate', 'generator'],
      license: 'MIT',
      src: ['src/genpassword.c', 'src/genpassword.h'],
      dependencies: {}
    },
    name: 'brendanashworth/genpassword.c',
    slug: 'brendanashworth-genpassword-c',
    url: 'https://github.com/brendanashworth/genpassword.c',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Displays contents of ASN.1 encoded data',
    manifest: {
      name: 'clibs/dumpasn1',
      version: '20130608',
      repo: 'clibs/dumpasn1',
      description: 'Displays contents of ASN.1 encoded data.',
      keywords: ['asn.1', 'asn1', 'ber', 'der'],
      src: ['dumpasn1.c'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'clibs/dumpasn1',
    slug: 'clibs-dumpasn1',
    url: 'https://github.com/clibs/dumpasn1',
    license: 'Unlicensed'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Automagically use C Functions and Structs with the Lua API',
    manifest: {
      name: 'orangeduck/luaautoc',
      version: '2.0.1',
      repo: 'orangeduck/LuaAutoC',
      description: 'Automagically use C Functions and Structs with the Lua API',
      keywords: ['c', 'lua', 'api', 'automatic', 'functions', 'structs'],
      license: 'BSD',
      src: ['lautoc.c', 'lautoc.h', 'lautocall.h'],
      dependencies: {}
    },
    name: 'orangeduck/luaautoc',
    slug: 'orangeduck-lua-auto-c',
    url: 'https://github.com/orangeduck/LuaAutoC',
    license: 'BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Display colors on your terminal',
    manifest: {
      name: 'gioyik/color-sh',
      version: '1.0',
      repo: 'gioyik/color-sh',
      description: 'C lib to print colors on your terminal',
      keywords: ['terminal', 'lib', 'color', 'sh', 'console'],
      license: 'MIT',
      src: ['src/color-sh.c', 'src/color-sh.h'],
      dependencies: {}
    },
    name: 'gioyik/color-sh',
    slug: 'gioyik-color-sh',
    url: 'https://github.com/Gioyik/color-sh',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Color C lib for printf',
    manifest: {
      name: 'gioyik/c_printf',
      version: '0.0.1',
      repo: 'Gioyik/c_printf',
      description: 'Color C lib for printf',
      keywords: ['color', 'c', 'printf', 'lib'],
      license: 'MIT',
      src: ['sources/c_printf.c', 'sources/c_printf.h'],
      dependencies: {}
    },
    name: 'gioyik/c_printf',
    slug: 'gioyik-c-printf',
    url: 'https://github.com/Gioyik/c_printf',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Ultra simple C lib to output color',
    manifest: {
      name: 'gioyik/slim_color',
      version: '0.0.1',
      repo: 'gioyik/slim_color',
      description: 'Ultra simple C lib to output color',
      keywords: ['color', 'lib', 'c'],
      license: 'MIT',
      src: ['src/color.h'],
      dependencies: {}
    },
    name: 'gioyik/slim_color',
    slug: 'gioyik-slim-color',
    url: 'https://github.com/Gioyik/slim_color',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'Powerful but simple library for writing text-based user interfaces',
    manifest: {
      name: 'nsf/termbox',
      version: '1.0.1a1',
      repo: 'nsf/termbox',
      description: 'Library for writing text-based user interfaces',
      keywords: [
        'termbox',
        'terminal',
        'term',
        'tty',
        'ansi',
        'escape',
        'colors',
        'console'
      ],
      license: 'MIT',
      src: [
        'src/bytebuffer.inl',
        'src/input.inl',
        'src/term.inl',
        'src/termbox.c',
        'src/termbox.h',
        'src/utf8.c'
      ],
      dependencies: {}
    },
    name: 'nsf/termbox',
    slug: 'nsf-termbox',
    url: 'https://github.com/nsf/termbox',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Portable re-entrant qsort (qsort_r / qsort_s)',
    manifest: {
      name: 'noporpoise/sort_r',
      version: '1.0.3',
      repo: 'noporpoise/sort_r',
      description: 'Portable qsort_r / qsort_s',
      keywords: ['portable', 'qsort', 'qsort_s', 'qsort_r', 'reentrant'],
      license: 'PD',
      src: ['sort_r.h'],
      dependencies: {}
    },
    name: 'noporpoise/sort_r',
    slug: 'noporpoise-sort-r',
    url: 'https://github.com/noporpoise/sort_r',
    license: 'PD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Configurable and pretty logging library',
    manifest: {
      name: 'kdmurray91/clogged',
      main: 'clogged',
      version: '0.1.0',
      description: 'Configurable, colorful logging lib.',
      repo: 'kdmurray91/clogged',
      repository: {
        type: 'git',
        url: 'https://github.com/kdmurray91/clogged.git'
      },
      src: ['clogged.c', 'clogged.h'],
      homepage: 'https://github.com/kdmurray91/clogged',
      keywords: ['log', 'debug', 'print', 'diagnostics'],
      author: {
        name: 'Kevin Murray',
        email: 'kdmfoss@gmail.com',
        url: 'https://github.com/kdmurray91'
      },
      license: 'MIT',
      dependencies: {}
    },
    name: 'kdmurray91/clogged',
    slug: 'kdmurray91-clogged',
    url: 'https://github.com/kdmurray91/clogged',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'Dynamic memory pool implementation, for reusable fixed, or variable sized memory blocks, using pthread mutex locks',
    manifest: {
      name: 'isty001/mem-pool',
      version: '1.1.2',
      repo: 'isty001/mem-pool',
      description:
        'Dynamic memory pool implementation, for reusable fixed, or variable sized memory blocks, using pthread mutex locks',
      keywords: [
        'memory-pool',
        'memory',
        'pool',
        'pthread',
        'c',
        'alignment',
        'mutex',
        'memorypool',
        'locks',
        'buffer',
        'variable'
      ],
      license: 'MIT',
      src: [
        'src/buffer.c',
        'src/fixed.c',
        'src/internals.h',
        'src/utils.c',
        'src/variable.c',
        'include/mem_pool.h'
      ],
      dependencies: {}
    },
    name: 'isty001/mem-pool',
    slug: 'isty001-mem-pool',
    url: 'https://github.com/isty001/mem-pool',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Macros for converting between metric and customary units',
    manifest: {
      name: 'alebcay/metric',
      version: 'master',
      repo: 'vonj/snippets',
      description: 'Metric conversion macros',
      keywords: ['metric', 'customary', 'conversion', 'macro'],
      license: 'Public Domain',
      src: ['metric.h'],
      dependencies: {}
    },
    name: 'alebcay/metric',
    slug: 'alebcay-metric',
    url: 'https://github.com/alebcay/metric',
    license: 'Public Domain'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: '.env loader for C',
    manifest: {
      name: 'isty001/dotenv-c',
      description: '.env loader for C',
      license: 'MIT',
      keywords: ['.env', 'dotenv', 'environemnt', 'variables'],
      src: ['src/dotenv.h', 'src/dotenv.c'],
      version: '0.1.0',
      repo: 'Isty001/dotenv-c',
      dependencies: {}
    },
    name: 'isty001/dotenv-c',
    slug: 'isty001-dotenv-c',
    url: 'https://github.com/Isty001/dotenv-c',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'DEPRECATED A logging library written in ANSI C',
    manifest: {
      name: 'daddinuz/liblogger',
      version: '0.0.3-deprecated',
      repo: 'daddinuz/liblogger',
      description: 'A logging library written in ANSI C',
      keywords: ['log', 'logging', 'logger', 'stream', 'file', 'color'],
      license: 'MIT',
      src: ['src/logger.c', 'src/logger.h'],
      dependencies: {
        'mattn/ansicolor-w32.c': '0.0.1',
        'jb55/extname.c': '1.1.0'
      }
    },
    name: 'daddinuz/liblogger',
    slug: 'daddinuz-liblogger',
    url: 'https://github.com/daddinuz/liblogger',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'A logging library written in C99',
    manifest: {
      name: 'daddinuz/logger',
      repo: 'daddinuz/logger',
      version: '0.3.1',
      license: 'MIT',
      description: 'A logging library written in C99.',
      keywords: ['log', 'logs', 'logger', 'logging'],
      development: {
        'daddinuz/traits': '2.1.0',
        'daddinuz/traits-unit': '1.1.0'
      },
      src: [
        'src/logger.h',
        'src/logger_err.h',
        'src/logger_level.h',
        'src/logger_stream.h',
        'src/logger_string.h',
        'src/logger_record.h',
        'src/logger_formatter.h',
        'src/logger_handler.h',
        'src/logger_builtin_loggers.h',
        'src/logger_builtin_formatters.h',
        'src/logger_builtin_handlers.h',
        'deps/sds/sdsalloc.h',
        'deps/sds/sds.h',
        'src/logger.c',
        'src/logger_err.c',
        'src/logger_level.c',
        'src/logger_string.c',
        'src/logger_record.c',
        'src/logger_formatter.c',
        'src/logger_handler.c',
        'src/logger_builtin_loggers.c',
        'src/logger_builtin_formatters.c',
        'src/logger_builtin_handlers.c',
        'deps/sds/sds.c'
      ],
      makefile: 'logger.cmake',
      dependencies: {}
    },
    name: 'daddinuz/logger',
    slug: 'daddinuz-logger',
    url: 'https://github.com/daddinuz/logger',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Header-only ANSI C library for colored text output',
    manifest: {
      name: 'ararslan/termcolor-c',
      version: '0.1.0',
      repo: 'ararslan/termcolor-c',
      description:
        'A header-only ANSI C library for writing colored text to the terminal',
      keywords: ['termcolor', 'color', 'terminal', 'header-only', 'utils'],
      license: '2-Clause BSD',
      src: ['include/termcolor-c.h'],
      dependencies: {}
    },
    name: 'ararslan/termcolor-c',
    slug: 'ararslan-termcolor-c',
    url: 'https://github.com/ararslan/termcolor-c',
    license: '2-Clause BSD'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Region based, expandable, memory allocator',
    manifest: {
      name: 'daddinuz/arena',
      repo: 'daddinuz/arena',
      version: '0.6.0',
      license: 'MIT',
      description: 'Arena memory allocator.',
      keywords: ['arena-allocator', 'memory-region', 'allocator', 'memory'],
      src: ['sources/arena.h', 'sources/arena.c'],
      dependencies: { 'daddinuz/panic': '2.0.0' },
      makefile: 'sources/build.cmake'
    },
    name: 'daddinuz/arena',
    slug: 'daddinuz-arena',
    url: 'https://github.com/daddinuz/arena',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description: 'Merge sort algorithm implementation',
    manifest: {
      name: 'abranhe/mergesort.c',
      version: '1.0.0',
      description: 'Merge Sort Algorithm',
      license: 'MIT',
      keywords: ['sorting', 'algorithm', 'merge', 'mergesort', 'allalgorithms'],
      repo: 'abranhe/mergesort.c',
      src: ['mergesort.h', 'mergesort.c'],
      dependencies: {}
    },
    name: 'abranhe/mergesort.c',
    slug: 'abranhe-mergesort-c',
    url: 'https://github.com/abranhe/mergesort.c',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'Lightweight and threadsafe logger with color coded text and optional file logging',
    manifest: {
      name: 'bonedaddy/ulog',
      version: '0.0.3',
      license: 'agpl-v3',
      description:
        'ulog (uber log) is a lightweight and threadsafe logger in C that provides color coded output, as well as the ability to send logs to a file',
      repo: 'bonedaddy/ulog',
      keywords: ['logger', 'color', 'threadsafe'],
      dependencies: { 'clibs/pthreads': '' },
      src: [
        'include/colors.h',
        'include/logger.h',
        'include/version.h',
        'src/colors.c',
        'src/logger.c',
        'cmake/CMakeLists.txt'
      ]
    },
    name: 'bonedaddy/ulog',
    slug: 'bonedaddy-ulog',
    url: 'https://github.com/bonedaddy/ulog',
    license: 'agpl-v3'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'Simple logger which does not allocate memory and can be configured at runtime using environment variables.',
    manifest: {
      name: 'aperezdc/clog',
      version: '0.1.0',
      repo: 'aperezdc/clog',
      description: 'Non-allocating runtime configurable logger',
      license: 'MIT',
      keywords: ['log', 'logging', 'debug'],
      src: ['clog.h', 'clog.c'],
      dependencies: {}
    },
    name: 'aperezdc/clog',
    slug: 'aperezdc-clog',
    url: 'https://github.com/aperezdc/clog',
    license: 'MIT'
  },
  {
    category: 'Utilities',
    dependents: [],
    description:
      'A minimal, zero-config, BSD licensed, readline replacement used in Redis, MongoDB, and Android.',
    manifest: {
      name: 'clibs/linenoise',
      version: '1.0.0',
      description: 'A small self-contained alternative to readline and libedit',
      repo: 'clibs/linenoise',
      src: ['linenoise.c', 'linenoise.h'],
      license: 'BSD',
      keywords: [],
      dependencies: {}
    },
    name: 'clibs/linenoise',
    slug: 'clibs-linenoise',
    url: 'https://github.com/clibs/linenoise',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'disjoint types (aka sum types)',
    manifest: {
      name: 'jmi2k/disjoint.h',
      version: '0.0.1',
      repo: 'jmi2k/disjoint.h',
      description: 'Disjoint types (aka sum types) for C',
      keywords: ['disjoint', 'sum', 'functional', 'header'],
      license: 'MIT',
      src: ['disjoint.h'],
      dependencies: {}
    },
    name: 'jmi2k/disjoint.h',
    slug: 'jmi2k-disjoint-h',
    url: 'https://github.com/jmi2k/disjoint.h',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'doubly linked list based on BSD TAILQ',
    manifest: {
      name: 'yrmt/arraylist',
      version: '0.1',
      repo: 'yrmt/ArrayList',
      description: 'Java ArrayList like in C using BSD TAILQ',
      keywords: ['list', 'tail', 'queue', 'linked-list', 'linked', 'ArrayList'],
      license: 'MIT',
      src: [
        'queue.h',
        'list.h',
        'list.c',
        'entry.h',
        'entry.c',
        'tools.h',
        'tools.c'
      ],
      dependencies: {}
    },
    name: 'yrmt/arraylist',
    slug: 'yrmt-array-list',
    url: 'https://github.com/yrmt/ArrayList',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: ['clehner/chains'],
    description: 'hash library built on zhash',
    manifest: {
      name: 'clibs/hash',
      version: '0.0.1',
      repo: 'clibs/hash',
      description: 'Hash wrapper around khash',
      keywords: ['hash', 'khash', 'container'],
      license: 'MIT',
      src: ['hash.c', 'hash.h', 'khash.h'],
      dependencies: {}
    },
    name: 'clibs/hash',
    slug: 'clibs-hash',
    url: 'https://github.com/clibs/hash',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: ['stephenmathieson/wiki-registry.c'],
    description: 'simple doubly linked list',
    manifest: {
      name: 'clibs/list',
      version: '0.2.0',
      repo: 'clibs/list',
      description: 'Simple linked list',
      keywords: ['list', 'structure'],
      license: 'MIT',
      src: [
        'src/list_iterator.c',
        'src/list.c',
        'src/list_node.c',
        'src/list.h'
      ],
      development: { bench: '*' },
      dependencies: {}
    },
    name: 'clibs/list',
    slug: 'clibs-list',
    url: 'https://github.com/clibs/list',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Generic red-black tree library (by Julienne Walker).',
    manifest: {
      description: 'Generic red-black tree library (by Julienne Walker).',
      keywords: ['binary', 'black', 'red', 'search', 'tree'],
      license: 'MIT',
      name: 'clibs/red-black-tree',
      repo: 'clibs/red-black-tree',
      src: ['src/jsw_rbtree.c', 'src/jsw_rbtree.h'],
      version: '1.0.0',
      dependencies: {}
    },
    name: 'clibs/red-black-tree',
    slug: 'clibs-red-black-tree',
    url: 'https://github.com/clibs/red-black-tree',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'synchronous stream implementation',
    manifest: {
      name: 'thlorenz/sync-stream.c',
      version: '0.1.1',
      description: 'synchronous stream implementation in C',
      repository: {
        type: 'git',
        url: 'git://github.com/thlorenz/sync-stream.c.git'
      },
      homepage: 'https://github.com/thlorenz/sync-stream.c',
      src: [
        'src/chunk.c',
        'src/file-stream.c',
        'src/stream.c',
        'include/sst.h'
      ],
      keywords: ['sync', 'stream', 'streaming', 'flow'],
      author: {
        name: 'Thorsten Lorenz',
        email: 'thlorenz@gmx.de',
        url: 'http://thlorenz.com'
      },
      license: 'MIT',
      dependencies: {}
    },
    name: 'thlorenz/sync-stream.c',
    slug: 'thlorenz-sync-stream-c',
    url: 'https://github.com/thlorenz/sync-stream.c',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'C macros for hash tables and more',
    manifest: {
      description: 'C macros for hash tables and more',
      keywords: [
        'array',
        'data',
        'hash',
        'list',
        'macro',
        'string',
        'structure',
        'uthash'
      ],
      name: 'troydhanson/uthash',
      repo: 'troydhanson/uthash',
      src: [
        'src/utarray.h',
        'src/uthash.h',
        'src/utlist.h',
        'src/utringbuffer.h',
        'src/utstack.h',
        'src/utstring.h'
      ],
      version: '2.3.0',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'troydhanson/uthash',
    slug: 'troydhanson-uthash',
    url: 'https://github.com/troydhanson/uthash',
    license: 'Unlicensed'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'circular buffer',
    manifest: {
      name: 'willemt/cbuffer',
      version: '0.0.1',
      repo: 'willemt/cbuffer',
      description: 'Circular buffer using mmap',
      keywords: ['buffer', 'ring buffer', 'circular buffer'],
      license: 'BSD',
      src: ['cbuffer.c', 'cbuffer.h'],
      dependencies: {}
    },
    name: 'willemt/cbuffer',
    slug: 'willemt-cbuffer',
    url: 'https://github.com/willemt/cbuffer',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'circular buffer alternative',
    manifest: {
      name: 'willemt/bipbuffer',
      version: '0.0.1',
      repo: 'willemt/bipbuffer',
      description: 'Circular buffer alternative',
      keywords: ['circular buffer', 'bipbuffer', 'queue', 'ring'],
      license: 'BSD',
      src: ['bipbuffer.c', 'bipbuffer.h'],
      dependencies: {}
    },
    name: 'willemt/bipbuffer',
    slug: 'willemt-bipbuffer',
    url: 'https://github.com/willemt/bipbuffer',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'heap priority queue',
    manifest: {
      name: 'willemt/heap',
      version: '0.0.1',
      repo: 'willemt/heap',
      description: 'Heap priority queued',
      keywords: ['heap', 'priority queue', 'queue'],
      license: 'BSD',
      src: ['heap.c', 'heap.h'],
      dependencies: {}
    },
    name: 'willemt/heap',
    slug: 'willemt-heap',
    url: 'https://github.com/willemt/heap',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'pseudo least recently used cache',
    manifest: {
      name: 'willemt/pseudolru',
      version: '0.0.1',
      repo: 'willemt/pseudolru',
      description: 'Pseudo least recently used cache',
      keywords: ['LRU', 'cache'],
      license: 'BSD',
      src: ['pseudolru.c', 'pseudolru.h'],
      dependencies: {}
    },
    name: 'willemt/pseudolru',
    slug: 'willemt-pseudolru',
    url: 'https://github.com/willemt/pseudolru',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'data structure which only has put and randomised take operations',
    manifest: {
      name: 'willemt/bag',
      version: '0.0.1',
      repo: 'willemt/bag',
      description:
        'Data structure which only has PUT and TAKE operations (TAKE removes a random item)',
      keywords: ['random', 'bag'],
      license: 'BSD',
      src: ['bag.c', 'bag.h'],
      dependencies: {}
    },
    name: 'willemt/bag',
    slug: 'willemt-bag',
    url: 'https://github.com/willemt/bag',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'easily get and set bits in a bitfield',
    manifest: {
      name: 'willemt/bitfield',
      version: '0.0.1',
      repo: 'willemt/bitfield',
      description: 'Abstracts an array of bits',
      keywords: ['bits', 'array', 'bitfield'],
      license: 'BSD',
      src: ['bitfield.c', 'bitfield.h'],
      dependencies: {}
    },
    name: 'willemt/bitfield',
    slug: 'willemt-bitfield',
    url: 'https://github.com/willemt/bitfield',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'self balancing tree',
    manifest: {
      name: 'willemt/array-avl-tree',
      version: '0.0.1',
      repo: 'willemt/array-avl-tree',
      description:
        'self balancing tree with slower inserts/removals than a red-black tree, but faster retrieval',
      keywords: ['AVL tree', 'self balancing', 'set', 'data structure'],
      license: 'BSD',
      src: ['avl_tree.c', 'avl_tree.h'],
      dependencies: {}
    },
    name: 'willemt/array-avl-tree',
    slug: 'willemt-array-avl-tree',
    url: 'https://github.com/willemt/array-avl-tree',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'hashmap that uses linked lists for managing collisions',
    manifest: {
      name: 'willemt/linked-list-hashmap',
      version: '0.0.1',
      repo: 'willemt/linked-list-hashmap',
      description: 'Hashmap that uses linked lists for managing collisions',
      keywords: ['hashmap', 'dictionary'],
      license: 'BSD',
      src: ['linked_list_hashmap.c', 'linked_list_hashmap.h'],
      dependencies: {}
    },
    name: 'willemt/linked-list-hashmap',
    slug: 'willemt-linked-list-hashmap',
    url: 'https://github.com/willemt/linked-list-hashmap',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'hashmap that uses quadratic probing (open addressing) for managing collisions',
    manifest: {
      name: 'willemt/quadratic-probing-hashmap',
      version: '0.0.1',
      repo: 'willemt/quadratic-probing-hashmap',
      description:
        'Hashmap that uses quadratic probing for managing collisions',
      keywords: ['hashmap', 'dictionary', 'inplace', 'open addressing'],
      license: 'BSD',
      src: ['quadratic_probing_hashmap.c', 'quadratic_probing_hashmap.h'],
      dependencies: {}
    },
    name: 'willemt/quadratic-probing-hashmap',
    slug: 'willemt-quadratic-probing-hashmap',
    url: 'https://github.com/willemt/quadratic-probing-hashmap',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'dynamic array',
    manifest: {
      name: 'rxi/vec',
      version: '0.2.1',
      repo: 'rxi/vec',
      description: 'Type-safe dynamic array',
      keywords: ['dynamic', 'array', 'vec', 'vector'],
      license: 'MIT',
      src: ['src/vec.c', 'src/vec.h'],
      dependencies: {}
    },
    name: 'rxi/vec',
    slug: 'rxi-vec',
    url: 'https://github.com/rxi/vec',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'map with string keys',
    manifest: {
      name: 'jlcordeiro/cmap',
      version: '0.0.1',
      repo: 'jlcordeiro/cmap',
      description: 'Basic implementation of a map container in C.',
      keywords: ['map', 'container'],
      license: 'MIT',
      src: ['map.c', 'map.h'],
      dependencies: {}
    },
    name: 'jlcordeiro/cmap',
    slug: 'jlcordeiro-cmap',
    url: 'https://github.com/jlcordeiro/cmap',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Dictionary implemented through a skiplist',
    manifest: {
      name: 'willemt/skiplist',
      version: '0.0.1',
      repo: 'willemt/skiplist',
      description: 'Dictionary implemented using a skiplist',
      keywords: ['skiplist', 'hashmap', 'map', 'dictionary'],
      license: 'BSD',
      src: ['skiplist.c', 'skiplist.h'],
      dependencies: {}
    },
    name: 'willemt/skiplist',
    slug: 'willemt-skiplist',
    url: 'https://github.com/willemt/skiplist',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Queue using a linked list',
    manifest: {
      name: 'willemt/linked-list-queue',
      version: '0.0.1',
      repo: 'willemt/linked-list-queue',
      description: 'A queue using a linked list',
      keywords: ['queue'],
      license: 'BSD',
      src: ['linked_list_queue.c', 'linked_list_queue.h'],
      dependencies: {}
    },
    name: 'willemt/linked-list-queue',
    slug: 'willemt-linked-list-queue',
    url: 'https://github.com/willemt/linked-list-queue',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'An integer queue that calculates mean in O(1)',
    manifest: {
      name: 'willemt/meanqueue',
      version: '0.0.1',
      repo: 'willemt/meanqueue',
      description: 'An integer queue that calculates mean in O(1)',
      keywords: ['queue', 'mean'],
      license: 'BSD',
      src: ['meanqueue.c', 'meanqueue.h'],
      dependencies: {}
    },
    name: 'willemt/meanqueue',
    slug: 'willemt-meanqueue',
    url: 'https://github.com/willemt/meanqueue',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'Data structure that efficiently represents multi-piece progress bars',
    manifest: {
      name: 'willemt/chunkybar',
      version: '0.0.1',
      repo: 'willemt/chunkybar',
      description:
        'Data structure that efficiently represents multi-piece progress bars',
      keywords: ['bittorrent', 'progress'],
      license: 'BSD',
      src: ['chunkybar.c', 'chunkybar.h'],
      dependencies: {}
    },
    name: 'willemt/chunkybar',
    slug: 'willemt-chunkybar',
    url: 'https://github.com/willemt/chunkybar',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'An arraylist that doesn\'t shift items so you can have "holes" between slots',
    manifest: {
      name: 'willemt/farraylist',
      version: '0.0.1',
      repo: 'willemt/farraylist',
      description:
        "An array list written that doesn't shift items once there is a 'hole' between slots",
      keywords: ['array', 'list'],
      license: 'BSD',
      src: ['fixed_arraylist.c', 'fixed_arraylist.h'],
      dependencies: {}
    },
    name: 'willemt/farraylist',
    slug: 'willemt-farraylist',
    url: 'https://github.com/willemt/farraylist',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: "OpenBSD's queue(3): linked lists and queues.",
    manifest: {
      name: 'mbucc/cqueue',
      version: '1.0.38',
      repo: 'mbucc/cqueue',
      description: "OpenBSD's queue(3): linked lists and queues.'",
      license: 'ISC and BSD',
      src: ['queue.h', 'queue.3'],
      keywords: [],
      dependencies: {}
    },
    name: 'mbucc/cqueue',
    slug: 'mbucc-cqueue',
    url: 'https://github.com/mbucc/cqueue',
    license: 'ISC and BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Symas Lightning Memory-Mapped Database (LMDB)',
    manifest: {
      name: 'clibs/lmdb',
      version: 'LMDB_0.9.17',
      repo: 'LMDB/lmdb',
      description: 'Symas Lightning Memory-Mapped Database (LMDB)',
      keywords: ['lmdb', 'key/value', 'database'],
      license: 'The OpenLDAP Public License',
      src: [
        'libraries/liblmdb/mdb.c',
        'libraries/liblmdb/lmdb.h',
        'libraries/liblmdb/midl.c',
        'libraries/liblmdb/midl.h'
      ],
      dependencies: {}
    },
    name: 'clibs/lmdb',
    slug: 'clibs-lmdb',
    url: 'https://github.com/clibs/lmdb',
    license: 'The OpenLDAP Public License'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Queue implemented using an array',
    manifest: {
      name: 'willemt/arrayqueue',
      version: '0.0.1',
      repo: 'willemt/arrayqueue',
      description: 'Queue implemented using an array',
      keywords: ['queue'],
      license: 'BSD',
      src: ['arrayqueue.c', 'arrayqueue.h'],
      dependencies: {}
    },
    name: 'willemt/arrayqueue',
    slug: 'willemt-arrayqueue',
    url: 'https://github.com/willemt/arrayqueue',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Simple dictionary implemented through a linked list',
    manifest: {
      name: 'ajaymt/dict.c',
      version: '0.0.31',
      repo: 'AjayMT/dict.c',
      src: ['src/dict.c', 'src/dict.h'],
      description: 'simple dictionary implementation',
      license: 'MIT',
      keywords: ['utility', 'dictionary', 'hash', 'table'],
      dependencies: {}
    },
    name: 'ajaymt/dict.c',
    slug: 'ajay-mt-dict-c',
    url: 'https://github.com/AjayMT/dict.c',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Simple linked list',
    manifest: {
      name: 'ajaymt/list.c',
      description: 'linked list',
      version: '0.0.1',
      src: ['src/list.h', 'src/list.c'],
      repo: 'AjayMT/list.c',
      license: 'MIT',
      keywords: ['utility', 'list', 'linked', 'array'],
      dependencies: {}
    },
    name: 'ajaymt/list.c',
    slug: 'ajay-mt-list-c',
    url: 'https://github.com/AjayMT/list.c',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: "A lock-free stack using C11's new stdatomic.h features",
    manifest: {
      name: 'skeeto/lstack',
      description: 'A C11 Lock-free Stack',
      version: '1.0.0',
      src: ['lstack.h', 'lstack.c'],
      license: 'Unlicense',
      repo: 'skeeto/lstack',
      keywords: [],
      dependencies: {}
    },
    name: 'skeeto/lstack',
    slug: 'skeeto-lstack',
    url: 'https://github.com/skeeto/lstack',
    license: 'Unlicense'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Transparent linked lists',
    manifest: {
      name: 'clehner/ll.c',
      version: '1.0.0',
      repo: 'clehner/ll.c',
      description: 'minimal linked list',
      keywords: ['list', 'structure'],
      author: 'Charles Lehner',
      license: 'LGPL-3.0+',
      src: ['ll.c', 'll.h'],
      dependencies: {}
    },
    name: 'clehner/ll.c',
    slug: 'clehner-ll-c',
    url: 'https://github.com/clehner/ll.c',
    license: 'LGPL-3.0+'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'Personal implementations of common datastructures.  (List, Vector, Graph, Matrix, Tree, etc)',
    manifest: {
      name: 'kellydunn/libkld',
      version: '0.0.0',
      src: [
        'src/common/common.h',
        'src/common/common.c',
        'src/graph/graph.h',
        'src/graph/graph.c',
        'src/list/list.h',
        'src/list/list.c',
        'src/matrix/matrix.h',
        'src/matrix/matrix.c',
        'src/tree/tree.h',
        'src/tree/tree.c',
        'src/vector/vector.h',
        'src/vector/vector.c'
      ],
      repo: 'kellydunn/libkld',
      keywords: [
        'data structures',
        'graph',
        'list',
        'matrix',
        'tree',
        'vector'
      ],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'kellydunn/libkld',
    slug: 'kellydunn-libkld',
    url: 'https://github.com/kellydunn/libkld',
    license: 'Unlicensed'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Queue built to be durable under failure',
    manifest: {
      name: 'willemt/duraqueue',
      version: '0.0.1',
      repo: 'willemt/duraqueue',
      description: 'Dead simple queue with durability under failure',
      keywords: ['queue'],
      license: 'BSD',
      src: ['src/duraqueue.c', 'include/duraqueue.h'],
      dependencies: { 'willemt/arrayqueue': '*' }
    },
    name: 'willemt/duraqueue',
    slug: 'willemt-duraqueue',
    url: 'https://github.com/willemt/duraqueue',
    license: 'BSD'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'C lib for mapping',
    manifest: {
      name: 'gioyik/mapc',
      version: '0.0.1',
      repo: 'gioyik/mapc',
      description: 'A simple associative-array library for C',
      keywords: ['map', 'array', 'lib', 'c', 'mapc'],
      license: 'MIT',
      src: ['src/mapc_lib.c', 'src/mapc_lib.h'],
      dependencies: {}
    },
    name: 'gioyik/mapc',
    slug: 'gioyik-mapc',
    url: 'https://github.com/Gioyik/mapc',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Linked list implementation',
    manifest: {
      name: 'neylsongularte/simple-linked-list-c',
      version: '0.1.0',
      repo: 'neylsongularte/simple-linked-list-c',
      description:
        'Implementação de lista encadeada (Linked list implementation)',
      keywords: ['linked', 'list', 'lista', 'encadeada'],
      src: ['src/lista.c', 'src/lista.h'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'neylsongularte/simple-linked-list-c',
    slug: 'neylsongularte-simple-linked-list-c',
    url: 'https://github.com/neylsongularte/simple-linked-list-c',
    license: 'Unlicensed'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'Dynamic arbitrary typed array using fat pointers and macros.',
    manifest: {
      name: 'htmk/fat-array',
      version: '0.0.4',
      repo: 'htmk/Fat-Array',
      description:
        'Fat array is a dynamic arbitrary typed array using fat pointers and macros.',
      keywords: [
        'fptr',
        'fat',
        'array',
        'pointer',
        'vector',
        'fatarray',
        'fat_array'
      ],
      license: 'MIT',
      src: ['src/fat_array.h'],
      dependencies: {}
    },
    name: 'htmk/fat-array',
    slug: 'htmk-fat-array',
    url: 'https://github.com/htmk/Fat-Array',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: "Type safe double linked list in the style of BSD's queue.h",
    manifest: {
      name: 'laserswald/dlist',
      version: '0.0.1',
      src: ['dlist.h'],
      repo: 'laserswald/dlist',
      description: 'Type safe generic doubly linked list in a single file.',
      keywords: ['generic', 'double linked list', 'macros'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'laserswald/dlist',
    slug: 'laserswald-dlist',
    url: 'https://github.com/laserswald/dlist',
    license: 'Unlicensed'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'Sparse arrays implemented by run-length-encoding regions of zeroes',
    manifest: {
      name: 'catb0t/sparse',
      version: '0.0.3',
      repo: 'catb0t/sparse',
      description:
        'Sparse arrays implemented by run-length-encoding regions of zeroes',
      keywords: ['math', 'arrays', 'bignum'],
      dependencies: { 'catb0t/yacbnl': '*' },
      license: 'GPL v3',
      src: [
        'src/sparse.h',
        'src/primitive/64_nonsparse.c',
        'src/primitive/64_sparse.c',
        'src/yacbnl/bn_nonsparse.c',
        'src/yacbnl/bn_sparse.c',
        'README.md',
        'LICENSE'
      ]
    },
    name: 'catb0t/sparse',
    slug: 'catb0t-sparse',
    url: 'https://github.com/catb0t/sparse',
    license: 'GPL v3'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'A series of functions to map a binary tree to a list ported from flat-tree.',
    manifest: {
      name: 'arablocks/flat-tree.c',
      version: '0.3.1',
      repo: 'arablocks/flat-tree.c',
      description: 'A series of functions to map a binary tree to a list',
      keywords: ['flat', 'binary', 'tree', 'list'],
      license: 'MIT',
      src: [
        'include/flat-tree/flat-tree.h',
        'include/flat-tree/iterator.h',
        'include/flat-tree/common.h',
        'src/flat-tree.c',
        'src/iterator.c',
        'LICENSE'
      ],
      development: {
        'stephenmathieson/debug.c': '0.0.1',
        'stephenmathieson/describe.h': '2.1.2'
      },
      dependencies: {}
    },
    name: 'arablocks/flat-tree.c',
    slug: 'arablocks-flat-tree-c',
    url: 'https://github.com/arablocks/flat-tree.c',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description: 'A C99 library for generating Merkle trees.',
    manifest: {
      name: 'jwerle/libmerkle',
      version: '0.3.3',
      author: 'jwerle',
      description: 'A C99 library for generating Merkle trees.',
      repo: 'jwerle/libmerkle',
      configure: 'bash configure --prefix=$PREFIX --build=$PREFIX',
      makefile: 'Makefile',
      prefix: './build/',
      src: [
        'include/merkle/allocator.h',
        'include/merkle/merkle.h',
        'include/merkle/platform.h',
        'include/merkle/version.h',
        'scripts/version',
        'src/allocator.c',
        'src/merkle.c',
        'src/version.c',
        'mk/brief.mk',
        'Makefile.in',
        'configure',
        'README.md',
        'LICENSE'
      ],
      repository: {
        type: 'git',
        url: 'git+https://github.com/jwerle/libmerkle.git'
      },
      license: 'MIT',
      bugs: { url: 'https://github.com/jwerle/libmerkle/issues' },
      homepage: 'https://github.com/jwerle/libmerkle#readme',
      dependencies: {
        'arablocks/flat-tree.c': '0.3.1',
        'jb55/sha256.c': '0.0.2'
      },
      development: { 'jwerle/libok': '0.3.0', 'clibs/sodium': 'master' },
      keywords: []
    },
    name: 'jwerle/libmerkle',
    slug: 'jwerle-libmerkle',
    url: 'https://github.com/jwerle/libmerkle',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'A Zero-allocation buffer handling library for low-memory applications.',
    manifest: {
      name: 'rikvdh/zabuffer',
      version: '0.1.1',
      repo: 'rikvdh/zabuffer',
      description: 'Zero-allocation buffer-handling',
      license: 'MIT',
      keywords: ['zeroallocation', 'memory', 'string', 'data', 'buffer', 'buf'],
      src: ['zabuffer.h', 'zabuffer.c'],
      dependencies: {}
    },
    name: 'rikvdh/zabuffer',
    slug: 'rikvdh-zabuffer',
    url: 'https://github.com/rikvdh/zabuffer',
    license: 'MIT'
  },
  {
    category: 'Data structure',
    dependents: [],
    description:
      'A Zero-allocation ring-buffer library for low-memory applications.',
    manifest: {
      name: 'rikvdh/zringbuf',
      version: '0.1.1',
      repo: 'rikvdh/zringbuf',
      description: 'Zero-allocation ringbuffer',
      license: 'MIT',
      keywords: [
        'zeroallocation',
        'memory',
        'data',
        'buffer',
        'buf',
        'ringbuffer',
        'ringbuf',
        'ring'
      ],
      src: ['zringbuf.h', 'zringbuf.c'],
      dependencies: {}
    },
    name: 'rikvdh/zringbuf',
    slug: 'rikvdh-zringbuf',
    url: 'https://github.com/rikvdh/zringbuf',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'fast logfmt parser.',
    manifest: {
      name: 'clibs/logfmt',
      version: '1.0.0',
      repo: 'clibs/logfmt',
      description: 'SAX-style logfmt parser',
      keywords: ['parser', 'sax', 'log', 'logfmt', 'ragel'],
      license: 'MIT',
      src: ['logfmt.h', 'logfmt.c', 'utils.c'],
      dependencies: {}
    },
    name: 'clibs/logfmt',
    slug: 'clibs-logfmt',
    url: 'https://github.com/clibs/logfmt',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'JSON parser.',
    manifest: {
      name: 'clibs/jsmn',
      version: '1.0.0',
      repo: 'clibs/jsmn',
      description: 'json parser',
      license: 'MIT',
      src: ['jsmn.c', 'jsmn.h', 'LICENSE'],
      makefile: 'Makefile',
      keywords: [],
      dependencies: {}
    },
    name: 'clibs/jsmn',
    slug: 'clibs-jsmn',
    url: 'https://github.com/clibs/jsmn',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Parser Combinator Library for C',
    manifest: {
      name: 'orangeduck/mpc',
      version: '0.9.8',
      repo: 'orangeduck/mpc',
      description: 'A Parser Combinator library for C',
      keywords: ['parser', 'combinator', 'library', 'c', 'mpc'],
      license: 'BSD',
      src: ['mpc.c', 'mpc.h'],
      dependencies: {}
    },
    name: 'orangeduck/mpc',
    slug: 'orangeduck-mpc',
    url: 'https://github.com/orangeduck/mpc',
    license: 'BSD'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Read torrent files',
    manifest: {
      name: 'willemt/torrent-reader',
      version: '0.0.1',
      repo: 'willemt/torrent-reader',
      description: 'Read the contents of torrent files',
      keywords: ['bencode', 'bittorrent', 'torrent', 'serialization'],
      license: 'BSD',
      src: ['torrent_reader.c', 'torrent_reader.h'],
      dependencies: {}
    },
    name: 'willemt/torrent-reader',
    slug: 'willemt-torrent-reader',
    url: 'https://github.com/willemt/torrent-reader',
    license: 'BSD'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Parse JSON.',
    manifest: {
      name: 'mbucc/js0n',
      version: '1.0.2',
      repo: 'mbucc/js0n',
      description: 'json parser',
      license: 'Public domain',
      src: ['js0n.c', 'js0n.h', 'j0g.c', 'j0g.h', 'js0n.3', 'j0g.3'],
      makefile: 'Makefile',
      keywords: [],
      dependencies: {}
    },
    name: 'mbucc/js0n',
    slug: 'mbucc-js0n',
    url: 'https://github.com/mbucc/js0n',
    license: 'Public domain'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Parse field ranges (like cut)',
    manifest: {
      name: 'jb55/field-range-parser.c',
      version: '0.0.2',
      repo: 'jb55/field-range-parser.c',
      description: 'Parse field ranges (like the cut command)',
      keywords: ['cut', 'fields'],
      license: 'MIT',
      src: ['field-range-parser.c', 'field-range-parser.h'],
      dependencies: {}
    },
    name: 'jb55/field-range-parser.c',
    slug: 'jb55-field-range-parser-c',
    url: 'https://github.com/jb55/field-range-parser.c',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Querystring parser',
    manifest: {
      name: 'jb55/querystring.c',
      version: '0.1.1',
      repo: 'https://github.com/jb55/querystring.c',
      description: 'querystring parser',
      keywords: ['querystring', 'uri'],
      src: ['querystring.c', 'querystring.h'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'jb55/querystring.c',
    slug: 'jb55-querystring-c',
    url: 'https://github.com/jb55/querystring.c',
    license: 'Unlicensed'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Test a string to see if it is a number',
    manifest: {
      name: 'jb55/is_number.c',
      version: '0.1',
      repo: 'jb55/is_number.c',
      description: "test a string to see if it's a number",
      keywords: ['is_number', 'number'],
      license: 'MIT',
      src: ['is_number.c', 'is_number.h'],
      dependencies: {}
    },
    name: 'jb55/is_number.c',
    slug: 'jb55-is-number-c',
    url: 'https://github.com/jb55/is_number.c',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'http request/response parser for c',
    manifest: {
      name: 'brendanashworth/http-parser',
      version: '2.3.0',
      repo: 'brendanashworth/http-parser',
      description: 'http request/response parser for c',
      keywords: ['http', 'parser', 'request', 'response'],
      license: 'MIT',
      src: ['http_parser.h', 'http_parser.c'],
      dependencies: {}
    },
    name: 'brendanashworth/http-parser',
    slug: 'brendanashworth-http-parser',
    url: 'https://github.com/brendanashworth/http-parser',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Semver 2.0 parser and render written in ANSI C',
    manifest: {
      name: 'h2non/semver.c',
      version: '1.0.0',
      repo: 'h2non/semver.c',
      author: 'Tomas Aparicio',
      license: 'MIT',
      description: 'Semantic version parser and render written in ANSI C',
      keywords: [
        'semver',
        'semantic',
        'versioning',
        'version',
        'parser',
        'dependencies',
        'matcher',
        'ansi'
      ],
      src: ['semver.c', 'semver.h'],
      dependencies: {}
    },
    name: 'h2non/semver.c',
    slug: 'h2non-semver-c',
    url: 'https://github.com/h2non/semver.c',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description: 'Lightweight JSON library written in C.',
    manifest: {
      name: 'kgabis/parson',
      version: '1.2.0',
      repo: 'kgabis/parson',
      description: 'Small json parser and reader',
      keywords: ['json', 'parser'],
      license: 'MIT',
      src: ['parson.c', 'parson.h'],
      dependencies: {}
    },
    name: 'kgabis/parson',
    slug: 'kgabis-parson',
    url: 'https://github.com/kgabis/parson',
    license: 'MIT'
  },
  {
    category: 'Parsing',
    dependents: [],
    description:
      'String-based parser based on matching strings for interpreting and handling string-based interfaces.',
    manifest: {
      name: 'rikvdh/matching',
      version: '0.2.0',
      repo: 'rikvdh/matching',
      description:
        'String-based matching-engine for interpreting and handling string-based interfaces',
      license: 'MIT',
      keywords: [
        'zeroallocation',
        'memory',
        'string',
        'matching',
        'parsing',
        'callback'
      ],
      src: [
        'matching.h',
        'matching.c',
        'deps/zabuffer/zabuffer.h',
        'deps/zabuffer/zabuffer.c',
        'deps/zringbuf/zringbuf.h',
        'deps/zringbuf/zringbuf.c'
      ],
      dependencies: {}
    },
    name: 'rikvdh/matching',
    slug: 'rikvdh-matching',
    url: 'https://github.com/rikvdh/matching',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Run-length encoding',
    manifest: {
      name: 'clibs/rle',
      version: '0.0.1',
      repo: 'clibs/rle',
      description: 'Run-length encoding of byte arrays.',
      keywords: ['rle', 'run-length', 'compress', 'codec'],
      license: 'MIT',
      src: ['rle.h', 'rle.c'],
      dependencies: { 'clibs/int': '*' }
    },
    name: 'clibs/rle',
    slug: 'clibs-rle',
    url: 'https://github.com/clibs/rle',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Snappy codec',
    manifest: {
      name: 'clibs/snappy',
      version: '1.0.0',
      repo: 'clibs/snappy',
      description: 'Google Snappy compression algorithm implementation',
      license: 'MIT',
      src: ['compat.h', 'snappy.c', 'snappy.h', 'LICENSE'],
      keywords: [],
      dependencies: {}
    },
    name: 'clibs/snappy',
    slug: 'clibs-snappy',
    url: 'https://github.com/clibs/snappy',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'URI Component encoder/decoder',
    manifest: {
      name: 'littlstar/uri.c',
      version: '0.0.6',
      repo: 'littlstar/uri.c',
      description: 'URI Component encoder/decoder',
      keywords: ['uri', 'component', 'decode', 'encode'],
      development: { 'jwerle/libok': '*' },
      src: ['uri.h', 'encode.c', 'decode.c'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'littlstar/uri.c',
    slug: 'littlstar-uri-c',
    url: 'https://github.com/littlstar/uri.c',
    license: 'Unlicensed'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: "HTML escape the characters '<', '>', '&', and '\"'",
    manifest: {
      name: 'mbucc/chtmlescape',
      version: '1.0.6',
      repo: 'mbucc/chtmlescape',
      description: "Escape the characters '<','>','&' and '\"'",
      license: 'ISC',
      src: ['htmlescape.c', 'htmlescape.h'],
      keywords: [],
      dependencies: {}
    },
    name: 'mbucc/chtmlescape',
    slug: 'mbucc-chtmlescape',
    url: 'https://github.com/mbucc/chtmlescape',
    license: 'ISC'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Base64 encode/decode',
    manifest: {
      name: 'littlstar/b64.c',
      repo: 'littlstar/b64.c',
      version: '0.0.2',
      description: 'Base64 encode/decode',
      keywords: ['base', '64', 'crypto'],
      src: ['b64.h', 'encode.c', 'decode.c', 'buffer.c'],
      development: { 'jwerle/libok': '*' },
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'littlstar/b64.c',
    slug: 'littlstar-b64-c',
    url: 'https://github.com/littlstar/b64.c',
    license: 'Unlicensed'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'A whatwg compliant UTF8 encoding and decoding library',
    manifest: {
      name: 'jwerle/libutf8',
      version: '0.1.1',
      description: 'A whatwg compliant UTF8 encoding and decoding library',
      repo: 'jwerle/libutf8',
      src: ['Makefile', 'utf8.h', 'encode.c', 'decode.c'],
      keywords: ['utf8', 'charset', 'encoding', 'decoding'],
      author: 'Joseph Werle',
      license: 'MIT',
      dependencies: {}
    },
    name: 'jwerle/libutf8',
    slug: 'jwerle-libutf8',
    url: 'https://github.com/jwerle/libutf8',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Let me write out bits to a stream',
    manifest: {
      name: 'willemt/bitstream',
      version: '0.0.1',
      repo: 'willemt/bitstream',
      description: 'Let me write out bits to a stream',
      keywords: ['stream', 'bits'],
      license: 'BSD',
      src: ['bitstream.c', 'bitstream.h'],
      dependencies: {}
    },
    name: 'willemt/bitstream',
    slug: 'willemt-bitstream',
    url: 'https://github.com/willemt/bitstream',
    license: 'BSD'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Flip the endianess of integers',
    manifest: {
      name: 'willemt/fe',
      version: '0.0.1',
      repo: 'willemt/fe',
      description: 'Flip endianess of 32bit integer',
      keywords: ['little endian', 'big endian', 'endianess'],
      license: 'MIT',
      src: ['fe.c', 'fe.h'],
      dependencies: {}
    },
    name: 'willemt/fe',
    slug: 'willemt-fe',
    url: 'https://github.com/willemt/fe',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Portable endian conversion functions for C',
    manifest: {
      name: 'mikepb/endian.h',
      version: '0.0.1',
      repo: 'mikepb/endian.h',
      description: 'Portable endian conversion functions for C',
      keywords: ['portable', 'endian'],
      license: 'PD',
      src: ['endian.h'],
      dependencies: {}
    },
    name: 'mikepb/endian.h',
    slug: 'mikepb-endian-h',
    url: 'https://github.com/mikepb/endian.h',
    license: 'PD'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'A simple C library for compressing lists of integers',
    manifest: {
      name: 'lemire/simdcomp',
      version: '0.0.3',
      repo: 'lemire/simdcomp',
      description: 'A simple C library for compressing lists of integers',
      license: 'BSD-3-Clause',
      src: [
        'src/simdbitpacking.c',
        'src/simdcomputil.c',
        'src/simdintegratedbitpacking.c',
        'include/simdbitpacking.h',
        'include/simdcomp.h',
        'include/simdcomputil.h',
        'include/simdintegratedbitpacking.h'
      ],
      keywords: [],
      dependencies: {}
    },
    name: 'lemire/simdcomp',
    slug: 'lemire-simdcomp',
    url: 'https://github.com/lemire/simdcomp',
    license: 'BSD-3-Clause'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Convert binary data into a hexidecimal string',
    manifest: {
      name: 'pepaslabs/hexify.c',
      version: '0.0.1',
      repo: 'pepaslabs/hexify.c',
      description:
        'Convert binary data (unsigned char*) into a hexidecimal string',
      keywords: ['hex', 'hexidecimal'],
      license: 'MIT',
      src: ['hexify.h', 'hexify.c'],
      dependencies: {}
    },
    name: 'pepaslabs/hexify.c',
    slug: 'pepaslabs-hexify-c',
    url: 'https://github.com/pepaslabs/hexify.c',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description:
      'Create and encode ULIDs, Universal Lexicographically-sortable Identifiers.',
    manifest: {
      name: 'aperezdc/ulid-c',
      version: '0.1.2',
      repo: 'aperezdc/ulid-c',
      description: 'Universally Unique Lexically Sortable Identifier',
      license: 'MIT',
      keywords: ['identifier', 'unique', 'sortable', 'universal', 'ulid'],
      src: ['ulid.h', 'ulid.c'],
      dependencies: { 'aperezdc/apicheck': '0.1.1' }
    },
    name: 'aperezdc/ulid-c',
    slug: 'aperezdc-ulid-c',
    url: 'https://github.com/aperezdc/ulid-c',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'Minimalist UTF8 Iterator for C and C++.',
    manifest: {
      name: 'adricoin2010/utf8-iterator',
      version: '0.1.3',
      repo: 'adricoin2010/UTF8-Iterator',
      description: 'Minimalist UTF8 Iterator for C and C++',
      author: 'Adrian Guerrero Vera',
      keywords: [
        'strings',
        'string',
        'utf8',
        'charset',
        'encoding',
        'decoding'
      ],
      license: 'MIT',
      src: ['Source/UTF8.h', 'Source/UTF8.c'],
      dependencies: {}
    },
    name: 'adricoin2010/utf8-iterator',
    slug: 'adricoin2010-utf-8-iterator',
    url: 'https://github.com/adricoin2010/UTF8-Iterator',
    license: 'MIT'
  },
  {
    category: 'Encoding/Decoding',
    dependents: [],
    description: 'A C99 library for interacting with SLEEP file storage.',
    manifest: {
      name: 'jwerle/libsleepfile',
      version: '0.1.0',
      description: 'A C99 library for interacting with SLEEP file storage.',
      repo: 'jwerle/libsleepfile',
      src: [
        'include/sleepfile/platform.h',
        'include/sleepfile/version.h',
        'include/sleepfile/sleepfile.h',
        'src/sleepfile.c',
        'src/version.c',
        'mk/brief.mk',
        'Makefile.in',
        'configure',
        'README.md',
        'LICENSE'
      ],
      dependencies: {
        'jwerle/libnanoresource': '0.2.0',
        'jwerle/libras': '0.4.1'
      },
      development: {
        'jwerle/libram': '0.2.0',
        'jwerle/libok': '0.3.0',
        'arablocks/flat-tree.c': '0.3.1'
      },
      keywords: [],
      license: 'Unlicensed'
    },
    name: 'jwerle/libsleepfile',
    slug: 'jwerle-libsleepfile',
    url: 'https://github.com/jwerle/libsleepfile',
    license: 'Unlicensed'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: "File system API much like Node's fs module",
    manifest: {
      name: 'jwerle/fs.c',
      version: '0.2.0',
      description: "File system API much like Node's fs module",
      repo: 'jwerle/fs.c',
      src: ['fs.h', 'fs.c'],
      scripts: { test: 'make test' },
      repository: { type: 'git', url: 'git@github.com:jwerle/fs.c.git' },
      keywords: ['fs', 'filesystem', 'file', 'system'],
      author: 'Joseph Werle',
      license: 'MIT',
      bugs: { url: 'https://github.com/jwerle/fs.c/issues' },
      dependencies: {}
    },
    name: 'jwerle/fs.c',
    slug: 'jwerle-fs-c',
    url: 'https://github.com/jwerle/fs.c',
    license: 'MIT'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: 'mkdir -p',
    manifest: {
      name: 'stephenmathieson/mkdirp.c',
      version: '0.1.5',
      repo: 'stephenmathieson/mkdirp.c',
      description: 'mkdir -p',
      keywords: ['mkdir', 'mkdirp'],
      license: 'MIT',
      src: ['src/mkdirp.c', 'src/mkdirp.h'],
      dependencies: {
        'stephenmathieson/path-normalize.c': '*',
        'clibs/strdup': '0.0.0'
      }
    },
    name: 'stephenmathieson/mkdirp.c',
    slug: 'stephenmathieson-mkdirp-c',
    url: 'https://github.com/stephenmathieson/mkdirp.c',
    license: 'MIT'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: 'rm -rf',
    manifest: {
      name: 'stephenmathieson/rimraf.c',
      version: '0.1.0',
      repo: 'stephenmathieson/rimraf.c',
      description: 'rm -rf',
      keywords: ['rm', 'rimraf', 'unlink'],
      license: 'MIT',
      src: ['src/rimraf.c', 'src/rimraf.h'],
      dependencies: { 'stephenmathieson/path-join.c': 'master' }
    },
    name: 'stephenmathieson/rimraf.c',
    slug: 'stephenmathieson-rimraf-c',
    url: 'https://github.com/stephenmathieson/rimraf.c',
    license: 'MIT'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: 'reads a file and returns contents as a string',
    manifest: {
      name: 'willemt/file2str',
      version: '0.0.1',
      repo: 'willemt/file2str',
      description:
        'Simply read a file and return its contents as a null terminated string',
      keywords: ['read', 'file'],
      license: 'public domain',
      src: ['file2str.c', 'file2str.h'],
      dependencies: {}
    },
    name: 'willemt/file2str',
    slug: 'willemt-file2str',
    url: 'https://github.com/willemt/file2str',
    license: 'public domain'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description:
      'for managing the creation of files where the content of the files will be written to randomly',
    manifest: {
      name: 'willemt/stubfile',
      version: '0.0.1',
      repo: 'willemt/stubfile',
      description:
        'Functions for writing out stub files (eg. bittorrent download files)',
      keywords: ['bittorrent', 'file', 'stub file'],
      license: 'BSD',
      src: ['stubfile.c', 'stubfile.h'],
      dependencies: {}
    },
    name: 'willemt/stubfile',
    slug: 'willemt-stubfile',
    url: 'https://github.com/willemt/stubfile',
    license: 'BSD'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: "An implementation of Python's tempfile.tempdir algorithm",
    manifest: {
      name: 'stephenmathieson/tempdir.c',
      version: '0.0.2',
      repo: 'stephenmathieson/tempdir.c',
      description: "implementation of Python's tempfile.tempdir",
      keywords: ['temp', 'tempdir'],
      src: ['tempdir.h', 'tempdir.c'],
      dependencies: { 'clibs/strdup': '0.0.0' },
      development: { 'jwerle/fs.c': '*' },
      license: 'Unlicensed'
    },
    name: 'stephenmathieson/tempdir.c',
    slug: 'stephenmathieson-tempdir-c',
    url: 'https://github.com/stephenmathieson/tempdir.c',
    license: 'Unlicensed'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: 'Create a pidfile',
    manifest: {
      name: 'willemt/pidfile',
      version: '0.0.1',
      repo: 'willemt/pidfile',
      description: 'Write out a pidfile',
      keywords: ['pid', 'pidfile'],
      license: 'BSD',
      src: ['pidfile.c', 'pidfile.h'],
      dependencies: {}
    },
    name: 'willemt/pidfile',
    slug: 'willemt-pidfile',
    url: 'https://github.com/willemt/pidfile',
    license: 'BSD'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description:
      'Lightweight, portable and easy to integrate C directory and file reader',
    manifest: {
      name: 'cxong/tinydir',
      description:
        'Lightweight, portable and easy to integrate C directory and file reader',
      license: 'BSD-2-Clause',
      keywords: ['dir', 'directory', 'file', 'reader', 'filesystem'],
      src: ['tinydir.h'],
      version: '1.2.4',
      repo: 'cxong/tinydir',
      dependencies: {}
    },
    name: 'cxong/tinydir',
    slug: 'cxong-tinydir',
    url: 'https://github.com/cxong/tinydir',
    license: 'BSD-2-Clause'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: 'Copies files, directories recursively',
    manifest: {
      name: 'isty001/copy',
      description: 'Copies files, directories recursively',
      version: '0.0.0',
      repo: 'Isty001/copy',
      dependencies: { 'cxong/tinydir': '*', 'jwerle/fs.c': '0.1.2' },
      development: {
        'jlcordeiro/minunit': '*',
        'stephenmathieson/rimraf.c': '0.1.0'
      },
      keywords: ['dir', 'directory', 'file', 'copy', 'recursive'],
      license: 'MIT',
      src: ['src/copy.c', 'src/copy.h']
    },
    name: 'isty001/copy',
    slug: 'isty001-copy',
    url: 'https://github.com/Isty001/copy',
    license: 'MIT'
  },
  {
    category: 'Filesystem',
    dependents: [],
    description: 'Locate executable via $PATH or given string',
    manifest: {
      name: 'clibs/which',
      version: '0.1.3',
      repo: 'clibs/which',
      description: 'Locate executable via PATH or given string',
      keywords: [
        'lookup',
        'which',
        'locate',
        'find',
        'path',
        'bin',
        'executable'
      ],
      license: 'MIT',
      src: ['src/which.c', 'src/which.h'],
      dependencies: { 'clibs/strdup': '0.0.0' },
      development: { 'stephenmathieson/describe.h': '1.0.0' }
    },
    name: 'clibs/which',
    slug: 'clibs-which',
    url: 'https://github.com/clibs/which',
    license: 'MIT'
  },
  {
    category: 'Hashing',
    dependents: [],
    description:
      'MurmurHash3 general hash bashed lookup function implementation',
    manifest: {
      name: 'jwerle/murmurhash.c',
      version: '0.0.3',
      repo: 'jwerle/murmurhash.c',
      description:
        'MurmurHash3 general hash bashed lookup function implementation',
      keywords: ['murmur', 'hash', 'murmurhash'],
      license: 'MIT',
      src: ['murmurhash.h', 'murmurhash.c'],
      dependencies: {}
    },
    name: 'jwerle/murmurhash.c',
    slug: 'jwerle-murmurhash-c',
    url: 'https://github.com/jwerle/murmurhash.c',
    license: 'MIT'
  },
  {
    category: 'Hashing',
    dependents: [],
    description: 'sha1 hash algorithm',
    manifest: {
      name: 'clibs/sha1',
      version: '0.0.1',
      repo: 'clibs/sha1',
      description: 'sha1 hash algorithm',
      keywords: ['sha1', 'hash'],
      license: 'public domain',
      src: ['sha1.c', 'sha1.h'],
      dependencies: {}
    },
    name: 'clibs/sha1',
    slug: 'clibs-sha1',
    url: 'https://github.com/clibs/sha1',
    license: 'public domain'
  },
  {
    category: 'Hashing',
    dependents: ['jwerle/libmerkle'],
    description: 'sha256 hash algorithm',
    manifest: {
      name: 'jb55/sha256.c',
      version: '0.0.2',
      repo: 'jb55/sha256.c',
      description: 'sha256 in c',
      keywords: ['sha256', 'sha2'],
      src: ['sha256.c', 'sha256.h'],
      dependencies: { 'jb55/rotate-bits.h': '0.1.1' },
      development: { 'thlorenz/tap.c': '*' },
      license: 'Unlicensed'
    },
    name: 'jb55/sha256.c',
    slug: 'jb55-sha256-c',
    url: 'https://github.com/jb55/sha256.c',
    license: 'Unlicensed'
  },
  {
    category: 'Hashing',
    dependents: [],
    description: 'hmac-sha256 message authentication algorithm',
    manifest: {
      name: 'aperezdc/hmac-sha256',
      version: '0.1.1',
      repo: 'aperezdc/hmac-sha256',
      description: 'No-frills HMAC-SHA256 implementation in C',
      keywords: ['hmac', 'sha256', 'sha2'],
      src: ['hmac-sha256.h', 'hmac-sha256.c'],
      dependencies: { 'aperezdc/apicheck': '0.1.1', 'jb55/sha256.c': '0.0.2' },
      license: 'Unlicensed'
    },
    name: 'aperezdc/hmac-sha256',
    slug: 'aperezdc-hmac-sha256',
    url: 'https://github.com/aperezdc/hmac-sha256',
    license: 'Unlicensed'
  },
  {
    category: 'Hashing',
    dependents: [],
    description: 'SipHash hash algorithm',
    manifest: {
      name: 'zackehh/siphash-c',
      version: '1.0.0',
      repo: 'zackehh/siphash-c',
      description: 'SipHash-C-D implementation in C89 with CLI bindings',
      keywords: ['cli', 'crypto', 'hashing', 'siphash'],
      license: 'MIT',
      src: ['src/siphash.c', 'src/siphash.h'],
      makefile: 'Makefile',
      dependencies: {}
    },
    name: 'zackehh/siphash-c',
    slug: 'zackehh-siphash-c',
    url: 'https://github.com/zackehh/siphash-c',
    license: 'MIT'
  },
  {
    category: 'Hashing',
    dependents: [],
    description: 'Fowler/Noll/Vo non-cryptographic hash algorithms',
    manifest: {
      name: 'catb0t/fnv-hash',
      version: '1.2',
      repo: 'catb0t/fnv-hash',
      description: 'Fowler/Noll/Vo non-cryptographic hash algorithms',
      keywords: ['hash', 'algorithm'],
      license: 'Public Domain',
      src: [
        'fnv.h',
        'fnv32.c',
        'fnv64.c',
        'hash_32.c',
        'hash_32a.c',
        'hash_64.c',
        'hash_64a.c',
        'have_ulong64.c',
        'test_fnv.c',
        'Makefile',
        'README.txt',
        'WHATS-THIS.md'
      ],
      makefile: 'Makefile',
      dependencies: {}
    },
    name: 'catb0t/fnv-hash',
    slug: 'catb0t-fnv-hash',
    url: 'https://github.com/catb0t/fnv-hash',
    license: 'Public Domain'
  },
  {
    category: 'Encryption',
    dependents: [],
    description:
      'AES block cipher with ECB, CBC, CTR, EAX encryption/ decryption and CMAC authentication',
    manifest: {
      name: 'veqtrus/vial_aes',
      version: '0.2.1',
      repo: 'veqtrus/vial_aes',
      description:
        'Permissively licensed AES implementation in C with ECB, CBC, CTR, GCM, and EAX modes of operation, as well as CMAC (OMAC1)',
      keywords: ['cryptography', 'aes', 'encryption', 'mac'],
      license: 'BSL-1.0',
      dependencies: {},
      src: ['README.md', 'LICENSE_1_0.txt', 'aes.h', 'aes.c']
    },
    name: 'veqtrus/vial_aes',
    slug: 'veqtrus-vial-aes',
    url: 'https://github.com/veqtrus/vial_aes',
    license: 'BSL-1.0'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Async event loop library extract from from redis',
    manifest: {
      name: 'aisk/libae',
      version: '1.0.0',
      repo: 'aisk/libae',
      keywords: ['async', 'eventloop', 'redis', 'net'],
      src: [
        'src/anet.c',
        'src/anet.h',
        'src/ae.c',
        'src/ae.h',
        'src/ae_epoll.c',
        'src/ae_evport.c',
        'src/ae_kqueue.c',
        'src/ae_select.c',
        'src/config.h',
        'src/fmacros.h',
        'src/zmalloc.h'
      ],
      makefile: 'Makefile',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'aisk/libae',
    slug: 'aisk-libae',
    url: 'https://github.com/aisk/libae',
    license: 'Unlicensed'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Basic TCP socket stuff made a bit less boring',
    manifest: {
      name: 'jb55/anet.c',
      version: '0.1.0',
      repo: 'jb55/anet.c',
      src: ['src/anet.c', 'src/anet.h'],
      keywords: [],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'jb55/anet.c',
    slug: 'jb55-anet-c',
    url: 'https://github.com/jb55/anet.c',
    license: 'Unlicensed'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'C implementation of the Raft consensus protocol',
    manifest: {
      name: 'willemt/raft',
      version: '0.2.0',
      repo: 'willemt/raft',
      description:
        'C implementation of the Raft Consensus protocol, BSD licensed',
      keywords: ['raft', 'consensus', 'protocol'],
      src: [
        'include/raft.h',
        'include/raft_log.h',
        'include/raft_private.h',
        'src/raft_log.c',
        'src/raft_node.c',
        'src/raft_server.c',
        'src/raft_server_properties.c'
      ],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'willemt/raft',
    slug: 'willemt-raft',
    url: 'https://github.com/willemt/raft',
    license: 'Unlicensed'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Connect to a bittorrent tracker',
    manifest: {
      name: 'willemt/tracker-client',
      version: '0.0.1',
      repo: 'willemt/tracker-client',
      description: 'Connect to a bittorrent tracker',
      keywords: ['bittorrent', 'tracker'],
      license: 'BSD',
      src: [
        'src/tracker_client.c',
        'src/tracker_http.c',
        'src/tracker_http_response_reader.c',
        'include/tracker_client_private.h',
        'include/tracker_client.h'
      ],
      dependencies: {
        'littlstar/asprintf.c': '*',
        'willemt/config-re': '*',
        'willemt/heapless-bencode': '*',
        'clibs/http-parser': '*',
        'clibs/strndup': '*',
        'littlstar/uri.c': '*'
      }
    },
    name: 'willemt/tracker-client',
    slug: 'willemt-tracker-client',
    url: 'https://github.com/willemt/tracker-client',
    license: 'BSD'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'A Bittorrent peer wire protocol implementation',
    manifest: {
      name: 'willemt/pwp',
      version: '0.0.1',
      repo: 'willemt/pwp',
      description: 'A Bittorrent peer wire protocol implementation',
      keywords: ['bittorrent'],
      license: 'BSD',
      src: [
        'pwp_bitfield.c',
        'pwp_connection.c',
        'pwp_handshaker.c',
        'pwp_msghandler.c',
        'pwp_connection.h',
        'pwp_connection_private.h',
        'pwp_handshaker.h',
        'pwp_local.h',
        'pwp_msghandler.h',
        'pwp_msghandler_private.h'
      ],
      dependencies: {
        'willemt/bitfield': '*',
        'willemt/bitstream': '*',
        'willemt/chunkybar': '*',
        'willemt/fe': '*',
        'willemt/linked-list-hashmap': '*',
        'willemt/linked-list-queue': '*',
        'willemt/meanqueue': '*'
      }
    },
    name: 'willemt/pwp',
    slug: 'willemt-pwp',
    url: 'https://github.com/willemt/pwp',
    license: 'BSD'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Cross platform Bittorrent library',
    manifest: {
      name: 'willemt/yabtorrent',
      version: '0.0.1',
      repo: 'willemt/yabtorrent',
      description: 'A Bittorrent library',
      keywords: ['bittorrent'],
      license: 'BSD',
      src: [
        'src/bt_blacklist.c',
        'src/bt_choker_leecher.c',
        'src/bt_choker_seeder.c',
        'src/bt_diskcache.c',
        'src/bt_diskmem.c',
        'src/bt_download_manager.c',
        'src/bt_peer_manager.c',
        'src/bt_piece.c',
        'src/bt_piece_db.c',
        'src/bt_selector_endgame.c',
        'src/bt_selector_random.c',
        'src/bt_selector_rarestfirst.c',
        'src/bt_selector_sequential.c',
        'src/bt_util.c',
        'include/bt_blacklist.h',
        'include/bt_choker.h',
        'include/bt_choker_leecher.h',
        'include/bt_choker_peer.h',
        'include/bt_choker_seeder.h',
        'include/bt_diskcache.h',
        'include/bt_diskmem.h',
        'include/bt_peermanager.h',
        'include/bt_piece.h',
        'include/bt_piece_db.h',
        'include/bt_piece_selector.h',
        'include/bt_selector_random.h',
        'include/bt_selector_rarestfirst.h',
        'include/bt_selector_sequential.h',
        'include/bt_string.h',
        'include/bt_util.h',
        'include/network_adapter.h',
        'include/network_adapter_mock.h'
      ],
      dependencies: {
        'willemt/array-avl-tree': '*',
        'littlstar/asprintf.c': '*',
        'willemt/bag': '*',
        'willemt/bipbuffer': '*',
        'willemt/bitfield': '*',
        'willemt/bitstream': '*',
        'willemt/chunkybar': '*',
        'willemt/config-re': '*',
        'willemt/cutest': '*',
        'willemt/event-timer': '*',
        'willemt/fe': '*',
        'willemt/heap': '*',
        'willemt/linked-list-hashmap': '*',
        'willemt/linked-list-queue': '*',
        'willemt/meanqueue': '*',
        'clibs/mt19937ar': '*',
        'willemt/pseudolru': '*',
        'willemt/pwp': '*',
        'clibs/sha1': '*',
        'clibs/strndup': '*'
      }
    },
    name: 'willemt/yabtorrent',
    slug: 'willemt-yabtorrent',
    url: 'https://github.com/willemt/yabtorrent',
    license: 'BSD'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Abstract Message Protocol C implementation',
    manifest: {
      name: 'clibs/amp',
      version: '0.0.1',
      repo: 'clibs/amp',
      description: 'Abstract Message Protocol',
      keywords: [
        'amp',
        'tcp',
        'udp',
        'message',
        'protocol',
        'encode',
        'decode'
      ],
      license: 'MIT',
      src: ['amp.c', 'amp.h'],
      dependencies: {}
    },
    name: 'clibs/amp',
    slug: 'clibs-amp',
    url: 'https://github.com/clibs/amp',
    license: 'MIT'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'libcurl-backed HTTP request library for C++',
    manifest: {
      name: 'littlstar/request.cc',
      version: '1.1.1',
      repo: 'littlstar/request.cc',
      description: 'Simple interface for making HTTP requests',
      keywords: ['http', 'request', 'https'],
      src: ['request.h', 'request.cc'],
      dependencies: {
        'littlstar/trim.cc': '0.1.2',
        'littlstar/uri.c': '0.0.6'
      },
      license: 'Unlicensed'
    },
    name: 'littlstar/request.cc',
    slug: 'littlstar-request-cc',
    url: 'https://github.com/littlstar/request.cc',
    license: 'Unlicensed'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Http requests made easier',
    manifest: {
      name: 'daddinuz/http',
      repo: 'daddinuz/http',
      version: '0.3.0',
      license: 'MIT',
      description: 'HTTP requests made easier.',
      keywords: ['http', 'https', 'requests'],
      src: [
        'sources/http.c',
        'sources/http.h',
        'sources/http_error.c',
        'sources/http_error.h',
        'sources/http_fire_result.c',
        'sources/http_fire_result.h',
        'sources/http_maybe_text.c',
        'sources/http_maybe_text.h',
        'sources/http_method.c',
        'sources/http_method.h',
        'sources/http_request.c',
        'sources/http_request.h',
        'sources/http_response.c',
        'sources/http_response.h',
        'sources/http_status.c',
        'sources/http_status.h'
      ],
      dependencies: {
        'daddinuz/atom': '0.1.0',
        'daddinuz/text': '0.1.0',
        'daddinuz/error': '0.2.0',
        'daddinuz/panic': '0.3.0'
      },
      development: {
        'daddinuz/traits': '3.2.0',
        'daddinuz/traits-unit': '3.0.0'
      },
      makefile: 'sources/build.cmake'
    },
    name: 'daddinuz/http',
    slug: 'daddinuz-http',
    url: 'https://github.com/daddinuz/http',
    license: 'MIT'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Utility library to simplify socket setup code',
    manifest: {
      name: 'aperezdc/netdial',
      version: '0.1.0',
      repo: 'aperezdc/netdial',
      description: '',
      license: 'MIT',
      keywords: ['network', 'sockets', 'utility'],
      src: ['netdial.h', 'netdial.c'],
      dependencies: { 'aperezdc/dbuf': '0.1.0' }
    },
    name: 'aperezdc/netdial',
    slug: 'aperezdc-netdial',
    url: 'https://github.com/aperezdc/netdial',
    license: 'MIT'
  },
  {
    category: 'Net',
    dependents: [],
    description: 'Simple HTTP GET requests backed by libcurl',
    manifest: {
      name: 'clibs/http-get.c',
      version: '0.4.0',
      repo: 'clibs/http-get.c',
      description: 'Simple HTTP GET requests backed by libcurl',
      keywords: ['http', 'curl', 'get', 'download'],
      license: 'MIT',
      src: ['src/http-get.c', 'src/http-get.h'],
      dependencies: {}
    },
    name: 'clibs/http-get.c',
    slug: 'clibs-http-get-c',
    url: 'https://github.com/clibs/http-get.c',
    license: 'MIT'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'Cross-platform asychronous I/O',
    manifest: {
      name: 'clibs/uv',
      version: 'v1.30.1',
      repo: 'clibs/uv',
      description: 'Cross-platform asychronous I/O',
      keywords: ['libuv', 'uv', 'async'],
      makefile: 'clib-install.sh',
      install: 'sh clib-install.sh',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'clibs/uv',
    slug: 'clibs-uv',
    url: 'https://github.com/clibs/uv',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: [],
    description:
      'LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values',
    manifest: {
      name: 'clibs/leveldb',
      version: '1.17.0',
      repo: 'clibs/leveldb',
      description:
        'LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.',
      keywords: ['leveldb', 'level', 'db'],
      install: './install.sh',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'clibs/leveldb',
    slug: 'clibs-leveldb',
    url: 'https://github.com/clibs/leveldb',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: [],
    description:
      'Concurrency primitives, safe memory reclamation mechanisms and non-blocking data structures designed to aid in the research, design and implementation of high performance concurrent systems.',
    manifest: {
      name: 'clibs/ck',
      version: '0.4.2',
      repo: 'clibs/ck',
      description:
        'Concurrency primitives, safe memory reclamation mechanisms and non-blocking data structures designed to aid in the research, design and implementation of high performance concurrent systems.',
      keywords: ['concurrency', 'ck', 'util'],
      install: './clib-install.sh',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'clibs/ck',
    slug: 'clibs-ck',
    url: 'https://github.com/clibs/ck',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'Apple System Management Controller (SMC) API',
    manifest: {
      name: 'beltex/libsmc',
      version: '0.0.1',
      repo: 'beltex/libsmc',
      description: 'Apple SMC API in C',
      keywords: ['apple', 'osx', 'smc'],
      license: 'GPLv2.0',
      install: 'make dynamic',
      src: ['include/smc.h'],
      dependencies: {}
    },
    name: 'beltex/libsmc',
    slug: 'beltex-libsmc',
    url: 'https://github.com/beltex/libsmc',
    license: 'GPLv2.0'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'high-performance path dispatching library for the web',
    manifest: {
      name: 'brendanashworth/r3',
      version: '1.3.3',
      repo: 'brendanashworth/r3',
      description: 'high-performance path dispatching library',
      keywords: ['path', 'dispatch', 'performance', 'r3', 'c9s'],
      license: 'MIT',
      src: [
        '3rdparty/zmalloc.c',
        '3rdparty/zmalloc.h',
        'include/r3.h',
        'include/r3.hpp',
        'include/r3_define.h',
        'include/r3_gvc.h',
        'include/r3_json.h',
        'include/r3_list.h',
        'include/r3_str.h',
        'include/str_array.h',
        'src/edge.c',
        'src/gvc.c',
        'src/json.c',
        'src/list.c',
        'src/match_entry.c',
        'src/node.c',
        'src/slug.c',
        'src/slug.h',
        'src/str.c',
        'src/token.c'
      ],
      dependencies: {}
    },
    name: 'brendanashworth/r3',
    slug: 'brendanashworth-r3',
    url: 'https://github.com/brendanashworth/r3',
    license: 'MIT'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'AST generation library',
    manifest: {
      name: 'qute/qute',
      version: '0.0.7',
      repo: 'qute/qute',
      description: 'Simple lexer and parser',
      keywords: ['parser', 'lexer'],
      dependencies: { 'clibs/strdup': '0.0.0' },
      devDependencies: { 'jwerle/fs.c': '*', 'jwerle/libok': '*' },
      src: [
        'qute.h',
        'src/ast.c',
        'src/lex.c',
        'src/error.c',
        'src/parser.c',
        'include/qute/ast.h',
        'include/qute/lex.h',
        'include/qute/parser.h',
        'include/qute/error.h'
      ],
      license: 'Unlicensed'
    },
    name: 'qute/qute',
    slug: 'qute-qute',
    url: 'https://github.com/qute/qute',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'modern embeddable key-value database',
    manifest: {
      name: 'clibs/sophia',
      version: '0.0.2',
      repo: 'clibs/sophia',
      description: 'modern emeddable key-value database',
      keywords: ['sophia', 'database', 'key/value'],
      license: 'MIT',
      src: ['sophia.c', 'sophia.h'],
      dependencies: {}
    },
    name: 'clibs/sophia',
    slug: 'clibs-sophia',
    url: 'https://github.com/clibs/sophia',
    license: 'MIT'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: "Mimic Rust's Option type",
    manifest: {
      name: 'daddinuz/option',
      repo: 'daddinuz/option',
      version: '1.0.0',
      license: 'MIT',
      description: 'Monadic option type.',
      keywords: ['option-type', 'monads', 'functional-programming'],
      src: ['sources/option.c', 'sources/option.h'],
      dependencies: { 'daddinuz/panic': '1.0.0' },
      development: {
        'daddinuz/traits': '3.2.0',
        'daddinuz/traits-unit': '3.0.0'
      },
      makefile: 'sources/build.cmake'
    },
    name: 'daddinuz/option',
    slug: 'daddinuz-option',
    url: 'https://github.com/daddinuz/option',
    license: 'MIT'
  },
  {
    category: 'Libraries',
    dependents: ['jwerle/libsleepfile'],
    description: 'A C99 library for creating tiny async resources.',
    manifest: {
      name: 'jwerle/libnanoresource',
      version: '0.2.0',
      author: 'Joseph Werle <joseph.werle@gmail.com>',
      license: 'MIT',
      description: 'A C99 library for creating tiny async resources.',
      repo: 'jwerle/libnanoresource',
      src: [
        'include/nanoresource/allocator.h',
        'include/nanoresource/platform.h',
        'include/nanoresource/request.h',
        'include/nanoresource/resource.h',
        'include/nanoresource/version.h',
        'include/nanoresource/nanoresource.h',
        'src/allocator.c',
        'src/request.c',
        'src/require.h',
        'src/resource.c',
        'src/version.c',
        'mk/brief.mk',
        'Makefile.in',
        'configure',
        'README.md',
        'LICENSE'
      ],
      development: { 'jwerle/libok': '0.3.0' },
      keywords: [],
      dependencies: {}
    },
    name: 'jwerle/libnanoresource',
    slug: 'jwerle-libnanoresource',
    url: 'https://github.com/jwerle/libnanoresource',
    license: 'MIT'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'A C99 library for creating random access memory interfaces.',
    manifest: {
      name: 'jwerle/libram',
      version: '0.2.1',
      description:
        'A C99 library for creating random access memory interfaces.',
      repo: 'jwerle/libram',
      src: [
        'include/ram/platform.h',
        'include/ram/version.h',
        'include/ram/ram.h',
        'src/ram.c',
        'src/version.c',
        'mk/brief.mk',
        'Makefile.in',
        'configure',
        'README.md',
        'LICENSE'
      ],
      dependencies: { 'jwerle/libras': '0.4.1' },
      development: { 'jwerle/libok': '0.3.0' },
      keywords: [],
      license: 'Unlicensed'
    },
    name: 'jwerle/libram',
    slug: 'jwerle-libram',
    url: 'https://github.com/jwerle/libram',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: ['jwerle/libsleepfile', 'jwerle/libram'],
    description: 'A C99 library for creating random access storage interfaces.',
    manifest: {
      name: 'jwerle/libras',
      version: '0.4.1',
      description:
        'A C99 library for creating random access storage interfaces.',
      repo: 'jwerle/libras',
      src: [
        'include/ras/allocator.h',
        'include/ras/emitter.h',
        'include/ras/platform.h',
        'include/ras/request.h',
        'include/ras/storage.h',
        'include/ras/version.h',
        'include/ras/ras.h',
        'src/allocator.c',
        'src/emitter.c',
        'src/request.c',
        'src/require.h',
        'src/storage.c',
        'src/version.c',
        'mk/brief.mk',
        'Makefile.in',
        'configure',
        'README.md',
        'LICENSE'
      ],
      development: { 'jwerle/libok': '0.2.0' },
      keywords: [],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'jwerle/libras',
    slug: 'jwerle-libras',
    url: 'https://github.com/jwerle/libras',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: [],
    description:
      "libalru is a library for creating really fast numeric based LRU caches that leverage an optimized CRC-16-CCITT ported over from @mafintosh's array-lru.",
    manifest: {
      name: 'jwerle/libalru',
      version: '0.1.0',
      repo: 'jwerle/libalru',
      keywords: [],
      description:
        'libalru is a library for creating really fast numeric based LRU caches that leverage an optimized CRC-16-CCITT.',
      development: { 'stephenmathieson/describe.h': '2.1.2' },
      dependencies: {},
      src: [
        'include/alru/alru.h',
        'include/alru/common.h',
        'src/alru.c',
        'src/crc16.c'
      ],
      license: 'Unlicensed'
    },
    name: 'jwerle/libalru',
    slug: 'jwerle-libalru',
    url: 'https://github.com/jwerle/libalru',
    license: 'Unlicensed'
  },
  {
    category: 'Libraries',
    dependents: [],
    description: 'A minimalistic C99 library for creating PDF document.',
    manifest: {
      name: 'andrerenaud/pdfgen',
      version: '0.1.0',
      repo: 'AndreRenaud/PDFGen',
      description: 'Create PDF documents',
      keywords: ['pdf', 'document'],
      license: 'UNLICENSE',
      src: ['pdfgen.c', 'pdfgen.h'],
      dependencies: {}
    },
    name: 'andrerenaud/pdfgen',
    slug: 'andrerenaud-pdfgen',
    url: 'https://github.com/AndreRenaud/PDFGen',
    license: 'UNLICENSE'
  },
  {
    category: 'Preprocessor macros',
    dependents: [],
    description: 'C preprocessor utilities',
    manifest: {
      name: 'madmurphy/zen.h',
      version: '1.0.0',
      description: 'C preprocessor utilities',
      homepage: 'https://madmurphy.github.io/zen.h/',
      author: 'madmurphy333@gmail.com',
      license: 'GPL-3.0',
      main: 'zen.h',
      repo: 'madmurphy/zen.h',
      src: ['zen.h'],
      bugs: {
        url: 'https://github.com/madmurphy/zen.h/issues',
        email: 'madmurphy333@gmail.com'
      },
      keywords: [
        'c',
        'c-preprocessor',
        'counter',
        'c-preprocessor-counter',
        'macro',
        'macros',
        'c-macro',
        'c-macros'
      ],
      dependencies: {}
    },
    name: 'madmurphy/zen.h',
    slug: 'madmurphy-zen-h',
    url: 'https://github.com/madmurphy/zen.h',
    license: 'GPL-3.0'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'A simple thread pool implementation (POSIX)',
    manifest: {
      name: 'jlcordeiro/threadpool',
      version: '0.0.1',
      repo: 'mbrossard/threadpool',
      description: 'Simple C Thread pool implementation.',
      keywords: ['thread', 'posix'],
      license: 'MIT',
      src: ['src/threadpool.c', 'src/threadpool.h'],
      dependencies: {}
    },
    name: 'jlcordeiro/threadpool',
    slug: 'jlcordeiro-threadpool',
    url: 'https://github.com/jlcordeiro/threadpool',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Asynchronous goodies built on libuv',
    manifest: {
      name: 'jwerle/async.h',
      version: '0.0.1',
      repo: 'jwerle/uv-async',
      description: 'Async goodies for libuv',
      keywords: ['async', 'libuv', 'util'],
      license: 'MIT',
      src: ['async.h'],
      dependencies: {}
    },
    name: 'jwerle/async.h',
    slug: 'jwerle-async-h',
    url: 'https://github.com/jwerle/async.h',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Simple async batch using pthreads',
    manifest: {
      name: 'stephenmathieson/batch.c',
      version: '0.0.0',
      repo: 'stephenmathieson/batch.c',
      description: 'A tiny async batch thingy using POSIX threads',
      keywords: ['pthread', 'async', 'concurrency'],
      license: 'MIT',
      src: ['src/batch.h', 'src/batch.c'],
      development: { 'stephenmathieson/describe.h': '*' },
      dependencies: {}
    },
    name: 'stephenmathieson/batch.c',
    slug: 'stephenmathieson-batch-c',
    url: 'https://github.com/stephenmathieson/batch.c',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Simple event handling library.',
    manifest: {
      dependencies: {
        'jonathanmarvens/uthash': '1.9.9',
        'clibs/list': '0.0.6'
      },
      description: 'Simple event handling library.',
      keywords: [
        'event',
        'fire',
        'firing',
        'handle',
        'handling',
        'observe',
        'publish',
        'subscribe',
        'trigger',
        'triggering'
      ],
      license: 'MIT',
      name: 'clibs/trigger',
      repo: 'clibs/trigger',
      src: ['src/trigger.c', 'src/trigger.h'],
      version: '0.0.1'
    },
    name: 'clibs/trigger',
    slug: 'clibs-trigger',
    url: 'https://github.com/clibs/trigger',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Tiny event emitter',
    manifest: {
      name: 'stephenmathieson/emitter.c',
      version: '0.3.0',
      license: 'MIT',
      src: ['src/emitter.c', 'src/emitter.h'],
      dependencies: { 'clibs/list': '*' },
      development: { wildcardcmp: '*' },
      keywords: []
    },
    name: 'stephenmathieson/emitter.c',
    slug: 'stephenmathieson-emitter-c',
    url: 'https://github.com/stephenmathieson/emitter.c',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Create and throw errors easily',
    manifest: {
      name: 'jwerle/throw.h',
      version: '0.0.1',
      repo: 'jwerle/throw.h',
      description: 'Create and throw errors easily',
      keywords: ['error', 'exception', 'throw'],
      license: 'MIT',
      src: ['throw.h'],
      dependencies: {}
    },
    name: 'jwerle/throw.h',
    slug: 'jwerle-throw-h',
    url: 'https://github.com/jwerle/throw.h',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Coroutines in C',
    manifest: {
      name: 'clibs/coro',
      version: '2012-12-21',
      repo: 'clibs/coro',
      description: 'C coroutines',
      keywords: ['coroutine'],
      license: 'BSD',
      src: ['coro.c', 'coro.h'],
      dependencies: {}
    },
    name: 'clibs/coro',
    slug: 'clibs-coro',
    url: 'https://github.com/clibs/coro',
    license: 'BSD'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Pure C implementation of Go channels',
    manifest: {
      name: 'tylertreat/chan',
      version: '0.0.4',
      repo: 'tylertreat/chan',
      description: 'Pure C implementation of Go channels',
      license: 'Apache',
      keywords: [
        'chan',
        'channel',
        'concurrency',
        'synchronization',
        'go',
        'golang'
      ],
      src: ['src/chan.c', 'src/chan.h', 'src/queue.c', 'src/queue.h'],
      dependencies: {}
    },
    name: 'tylertreat/chan',
    slug: 'tylertreat-chan',
    url: 'https://github.com/tylertreat/chan',
    license: 'Apache'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Go-style defer in C',
    manifest: {
      name: 'trws/libdefer',
      version: '0.0.1',
      repo: 'trws/libdefer',
      description: 'go-style defer goodness for C',
      keywords: ['defer', 'goland', 'convenience'],
      license: 'MIT',
      src: ['defer.c', 'include/defer.h', 'include/defer_macros.h'],
      dependencies: {}
    },
    name: 'trws/libdefer',
    slug: 'trws-libdefer',
    url: 'https://github.com/trws/libdefer',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: "Let's share one TCP socket across multiple threads",
    manifest: {
      name: 'willemt/uv_multiplex',
      version: '0.0.2',
      repo: 'willemt/uv_multiplex',
      description: "Let's share one TCP socket across multiple threads",
      keywords: ['libuv', 'tcp'],
      license: 'BSD',
      src: ['src/dispatcher.c', 'src/worker.c', 'include/uv_multiplex.h'],
      dependencies: {}
    },
    name: 'willemt/uv_multiplex',
    slug: 'willemt-uv-multiplex',
    url: 'https://github.com/willemt/uv_multiplex',
    license: 'BSD'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Batch work from multiple threads',
    manifest: {
      name: 'willemt/bmon',
      version: '0.0.1',
      repo: 'willemt/bmon',
      description:
        'Combine work from multiple threads into a batch to gain performance',
      keywords: ['libuv'],
      license: 'BSD',
      src: ['src/batch_monitor.c', 'include/batch_monitor.h'],
      dependencies: { 'willemt/heap': '*' }
    },
    name: 'willemt/bmon',
    slug: 'willemt-bmon',
    url: 'https://github.com/willemt/bmon',
    license: 'BSD'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'An exception handling framework for C',
    manifest: {
      name: 'guillermocalvo/exceptions4c',
      version: '3.0.5',
      description: 'An exception handling framework for C',
      repo: 'guillermocalvo/exceptions4c',
      license: 'LGPL',
      src: ['src/e4c.c', 'src/e4c.h'],
      keywords: [
        'exceptions',
        'library',
        'c',
        'exceptions-for-c',
        'error-handling'
      ],
      dependencies: {}
    },
    name: 'guillermocalvo/exceptions4c',
    slug: 'guillermocalvo-exceptions4c',
    url: 'https://github.com/guillermocalvo/exceptions4c',
    license: 'LGPL'
  },
  {
    category: 'Program flow',
    dependents: [],
    description: 'Standardized callback interface.',
    manifest: {
      name: 'mobiushorizons/closure_module',
      version: '0.0.2',
      repo: 'MobiusHorizons/closure_module',
      description: 'simple callback/closure interface for C/CModules',
      keywords: ['closure', 'mpp', 'callback', 'function'],
      license: 'MIT',
      src: ['closure.module.c', 'closure.c', 'closure.h'],
      dependencies: {}
    },
    name: 'mobiushorizons/closure_module',
    slug: 'mobiushorizons-closure-module',
    url: 'https://github.com/MobiusHorizons/closure_module',
    license: 'MIT'
  },
  {
    category: 'Program flow',
    dependents: [],
    description:
      'Utility macros for typesafe RAII-style scoped cleanups for variables.',
    manifest: {
      name: 'aperezdc/autocleanup',
      version: '0.1.0',
      repo: 'aperezdc/autocleanup',
      description: 'Helpers to automatically cleanup scoped resources',
      keywords: ['scoped', 'automatic', 'cleanup', 'pointers', 'handles'],
      src: ['autocleanup.h'],
      license: 'MIT',
      dependencies: {}
    },
    name: 'aperezdc/autocleanup',
    slug: 'aperezdc-autocleanup',
    url: 'https://github.com/aperezdc/autocleanup',
    license: 'MIT'
  },
  {
    category: 'Serialization',
    dependents: ['willemt/tracker-client'],
    description: "Bencode reader that doesn't use the heap",
    manifest: {
      name: 'willemt/heapless-bencode',
      version: '0.0.1',
      repo: 'willemt/heapless-bencode',
      description: "Bencode reader that doesn't use the heap",
      keywords: ['bencode', 'bittorrent', 'torrent', 'serialization'],
      license: 'BSD',
      src: ['bencode.c', 'bencode.h'],
      dependencies: {}
    },
    name: 'willemt/heapless-bencode',
    slug: 'willemt-heapless-bencode',
    url: 'https://github.com/willemt/heapless-bencode',
    license: 'BSD'
  },
  {
    category: 'Serialization',
    dependents: [],
    description: 'Bencode reader that loves working with streams',
    manifest: {
      name: 'willemt/streaming-bencode',
      version: '0.0.1',
      repo: 'willemt/streaming-bencode',
      description: 'Bencode reader that works on streams',
      keywords: [
        'streaming',
        'bencode',
        'bittorrent',
        'torrent',
        'serialization'
      ],
      license: 'BSD',
      src: ['bencode.c', 'bencode.h'],
      dependencies: {}
    },
    name: 'willemt/streaming-bencode',
    slug: 'willemt-streaming-bencode',
    url: 'https://github.com/willemt/streaming-bencode',
    license: 'BSD'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'DRY Microtesting for C',
    manifest: {
      name: 'orangeduck/ptest',
      version: '1.0.0',
      repo: 'orangeduck/ptest',
      description: 'A DRY Microtesting framework for C',
      keywords: ['testing', 'microtesting', 'DRY', 'c', 'ptest'],
      license: 'BSD',
      src: ['ptest.c', 'ptest.h'],
      dependencies: {}
    },
    name: 'orangeduck/ptest',
    slug: 'orangeduck-ptest',
    url: 'https://github.com/orangeduck/ptest',
    license: 'BSD'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'Conditional debug logging for C',
    manifest: {
      name: 'clibs/debug',
      version: '0.0.3',
      repo: 'clibs/debug',
      description: 'Debug logging for C',
      keywords: ['debug', 'log'],
      src: ['debug.h', 'debug.c'],
      dependencies: { 'jwerle/strsplit.h': '*', 'clibs/wildcardcmp': '*' },
      license: 'Unlicensed'
    },
    name: 'clibs/debug',
    slug: 'clibs-debug',
    url: 'https://github.com/clibs/debug',
    license: 'Unlicensed'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'Conditional debugging for C (again)',
    manifest: {
      name: 'stephenmathieson/debug.c',
      version: '0.0.1',
      src: ['debug.h', 'debug.c'],
      repo: 'stephenmathieson/debug.c',
      license: 'mit',
      dependencies: {
        'littlstar/asprintf.c': '0.0.3',
        'clibs/strdup': '0.0.0',
        'clibs/wildcardcmp': '0.0.0'
      },
      development: { ms: '*' },
      keywords: []
    },
    name: 'stephenmathieson/debug.c',
    slug: 'stephenmathieson-debug-c',
    url: 'https://github.com/stephenmathieson/debug.c',
    license: 'mit'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'Conditional debug logging for C++',
    manifest: {
      name: 'hij1nx/debug',
      description: '',
      repository: { type: 'git', url: 'git@github.com:heapwolf/debug.git' },
      dependencies: {},
      license: 'MIT',
      scripts: {
        test: [
          'clang++ -std=c++2a -stdlib=libc++',
          'test/index.cxx -o test/index && ./test/index'
        ],
        demo: [
          'clang++ -std=c++2a -stdlib=libc++',
          'test/demo.cxx -o test/demo && ./test/demo'
        ]
      },
      flags: ['-std=c++2a', '-stdlib=stdc++', '-O3'],
      files: ['index.hxx'],
      devDependencies: { 'git@github.com:heapwolf/cxx-tap': '07821de0' },
      keywords: []
    },
    name: 'hij1nx/debug',
    slug: 'hij1nx-debug',
    url: 'https://github.com/hij1nx/debug',
    license: 'MIT'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'Simple BDD testing utility',
    manifest: {
      name: 'stephenmathieson/describe.h',
      version: '2.1.2',
      repo: 'stephenmathieson/describe.h',
      description: 'Simple BDD describe test thingy',
      keywords: ['testing', 'bdd', 'assert', 'describe'],
      license: 'MIT',
      src: ['describe.h', 'describe.c'],
      dependencies: {
        'stephenmathieson/assertion-macros.h': '0.3.1',
        'Constellation/console-colors.c': '1.0.1'
      }
    },
    name: 'stephenmathieson/describe.h',
    slug: 'stephenmathieson-describe-h',
    url: 'https://github.com/stephenmathieson/describe.h',
    license: 'MIT'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'Super tiny tap output library',
    manifest: {
      name: 'jwerle/libok',
      version: '0.3.1',
      author: 'Joseph Werle',
      description: 'Super tiny tap output library',
      repo: 'jwerle/libok',
      src: ['ok.h', 'ok.c', 'Makefile'],
      keywords: ['tap', 'test'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'jwerle/libok',
    slug: 'jwerle-libok',
    url: 'https://github.com/jwerle/libok',
    license: 'Unlicensed'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'tap test runner',
    manifest: {
      name: 'thlorenz/tap.c',
      version: '0.0.1',
      description: 'Write tap tests in C.',
      src: ['tap.c', 'tap.h'],
      repository: { type: 'git', url: 'git://github.com/thlorenz/tap.c.git' },
      homepage: 'https://github.com/thlorenz/tap.c',
      dependencies: {},
      keywords: ['tap', 'test', 'check', 'tap.c'],
      author: {
        name: 'Thorsten Lorenz',
        email: 'thlorenz@gmx.de',
        url: 'http://thlorenz.com'
      },
      license: 'GPLv2'
    },
    name: 'thlorenz/tap.c',
    slug: 'thlorenz-tap-c',
    url: 'https://github.com/thlorenz/tap.c',
    license: 'GPLv2'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'A minimal, header-only, unit testing framework.',
    manifest: {
      name: 'jlcordeiro/minunit',
      version: '0.0.1',
      repo: 'jlcordeiro/minunit',
      description: 'Minimal unit testing framework for C',
      keywords: ['unit', 'testing'],
      license: 'MIT',
      src: ['minunit.h'],
      dependencies: {}
    },
    name: 'jlcordeiro/minunit',
    slug: 'jlcordeiro-minunit',
    url: 'https://github.com/jlcordeiro/minunit',
    license: 'MIT'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: ['stephenmathieson/describe.h'],
    description:
      'simple assertion macros (assert_equal, assert_str_equal, etc.)',
    manifest: {
      name: 'stephenmathieson/assertion-macros.h',
      version: '0.3.1',
      repo: 'stephenmathieson/assertion-macros.h',
      description: 'Simple assertion macros',
      keywords: ['assert', 'assertions'],
      license: 'MIT',
      src: ['assertion-macros.h'],
      dependencies: {}
    },
    name: 'stephenmathieson/assertion-macros.h',
    slug: 'stephenmathieson-assertion-macros-h',
    url: 'https://github.com/stephenmathieson/assertion-macros.h',
    license: 'MIT'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description:
      'A C unit testing library in 1 file. No dependencies, no dynamic allocation',
    manifest: {
      name: 'silentbicycle/greatest',
      version: 'v1.5.0',
      repo: 'silentbicycle/greatest',
      src: ['greatest.h'],
      description:
        'A C testing library in 1 file. No dependencies, no dynamic allocation.',
      license: 'ISC',
      keywords: ['test', 'unit', 'testing'],
      dependencies: {}
    },
    name: 'silentbicycle/greatest',
    slug: 'silentbicycle-greatest',
    url: 'https://github.com/silentbicycle/greatest',
    license: 'ISC'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: ['willemt/yabtorrent'],
    description: 'C unit testing',
    manifest: {
      name: 'willemt/cutest',
      version: '0.0.1',
      repo: 'willemt/cutest',
      description: 'TAP producing C unit test framework',
      keywords: ['unit test'],
      license: 'BSD',
      src: ['CuTest.c', 'CuTest.h', 'make-tests.sh'],
      dependencies: {}
    },
    name: 'willemt/cutest',
    slug: 'willemt-cutest',
    url: 'https://github.com/willemt/cutest',
    license: 'BSD'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'JTN002: A minimal unit testing framework for C',
    manifest: {
      name: 'jeradesign/minunit',
      description: 'A minimal unit testing framework for ANSI C',
      version: '1.0.0',
      src: ['minunit.h'],
      repo: 'jeradesign/MinUnit',
      keywords: [],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'jeradesign/minunit',
    slug: 'jeradesign-min-unit',
    url: 'https://github.com/jeradesign/MinUnit',
    license: 'Unlicensed'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: ['aperezdc/ulid-c', 'aperezdc/hmac-sha256'],
    description: 'Assertion macros for checking function parameters',
    manifest: {
      name: 'aperezdc/apicheck',
      version: '0.1.1',
      repo: 'aperezdc/apicheck',
      description: 'Assertion macros for checking function parameters',
      license: 'MIT',
      keywords: ['api', 'assert', 'assertion'],
      src: ['apicheck.h'],
      dependencies: {}
    },
    name: 'aperezdc/apicheck',
    slug: 'aperezdc-apicheck',
    url: 'https://github.com/aperezdc/apicheck',
    license: 'MIT'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'An assertions library written in C99',
    manifest: {
      name: 'daddinuz/traits',
      repo: 'daddinuz/traits',
      version: '4.1.0',
      license: 'MIT',
      description: 'Assertions library written in C99.',
      keywords: ['assert', 'assertions', 'assertions-library'],
      dependencies: {
        'daddinuz/trace': '3.0.0',
        'daddinuz/stringify': '3.0.0'
      },
      src: ['sources/traits.h']
    },
    name: 'daddinuz/traits',
    slug: 'daddinuz-traits',
    url: 'https://github.com/daddinuz/traits',
    license: 'MIT'
  },
  {
    category: 'Testing/Quality Assurance',
    dependents: [],
    description: 'A unittest framework written in C99',
    manifest: {
      name: 'daddinuz/traits-unit',
      repo: 'daddinuz/traits-unit',
      version: '4.1.0',
      license: 'MIT',
      description: 'Unittest framework written in C99.',
      keywords: [
        'test',
        'unittest',
        'framework',
        'unit-test',
        'unittesting',
        'unit-testing',
        'test-framework'
      ],
      development: { 'daddinuz/traits': '4.1.0' },
      dependencies: { 'daddinuz/trace': '3.0.0' },
      src: ['sources/traits-unit.h', 'sources/traits-unit.c'],
      makefile: 'sources/build.cmake'
    },
    name: 'daddinuz/traits-unit',
    slug: 'daddinuz-traits-unit',
    url: 'https://github.com/daddinuz/traits-unit',
    license: 'MIT'
  },
  {
    category: 'Timing',
    dependents: [],
    description: 'millisecond resolution timestamps',
    manifest: {
      name: 'clibs/timestamp',
      version: '0.0.2',
      repo: 'clibs/timestamp',
      description: 'Return a timestamp in milliseconds',
      keywords: ['time', 'timestamp', 'milliseconds'],
      license: 'MIT',
      src: ['timestamp.h', 'timestamp.c'],
      dependencies: {}
    },
    name: 'clibs/timestamp',
    slug: 'clibs-timestamp',
    url: 'https://github.com/clibs/timestamp',
    license: 'MIT'
  },
  {
    category: 'Timing',
    dependents: [],
    description: 'get wall and cpu time for benchmarking',
    manifest: {
      name: 'clibs/bench.h',
      version: '0.0.1',
      repo: 'clibs/bench',
      description: 'get wall and cpu time for benchmarking',
      keywords: ['bench'],
      license: 'MIT',
      src: ['bench.h'],
      dependencies: {}
    },
    name: 'clibs/bench.h',
    slug: 'clibs-bench-h',
    url: 'https://github.com/clibs/bench.h',
    license: 'MIT'
  },
  {
    category: 'Timing',
    dependents: [],
    description: 'timer with microsecond resolution',
    manifest: {
      name: 'clibs/timer',
      version: '1.0.0',
      repo: 'clibs/timer',
      description: 'Timer with microsecond resolution',
      keywords: ['timer', 'time', 'delta', 'count', 'second'],
      license: 'MIT',
      src: ['src/timer.h', 'src/timer.c'],
      dependencies: {}
    },
    name: 'clibs/timer',
    slug: 'clibs-timer',
    url: 'https://github.com/clibs/timer',
    license: 'MIT'
  },
  {
    category: 'Timing',
    dependents: ['willemt/yabtorrent'],
    description: 'A timer that fires events based off time',
    manifest: {
      name: 'willemt/event-timer',
      version: '0.0.1',
      repo: 'willemt/event-timer',
      description: 'A timer that fires events based off time',
      keywords: ['event', 'timer'],
      license: 'BSD',
      dependencies: { 'willemt/heap': '*' },
      src: ['event_timer.c', 'event_timer.h']
    },
    name: 'willemt/event-timer',
    slug: 'willemt-event-timer',
    url: 'https://github.com/willemt/event-timer',
    license: 'BSD'
  },
  {
    category: 'Timing',
    dependents: [],
    description: 'easy to use, beautiful-looking benchmarking library',
    manifest: {
      name: 'brendanashworth/bench',
      version: '0.0.2',
      repo: 'brendanashworth/bench',
      description: 'Easy to use, beautiful-looking benchmarking library',
      keywords: ['benchmark', 'bench', 'speed'],
      license: 'MIT',
      src: ['bench.h', 'bench.c'],
      dependencies: {}
    },
    name: 'brendanashworth/bench',
    slug: 'brendanashworth-bench',
    url: 'https://github.com/brendanashworth/bench',
    license: 'MIT'
  },
  {
    category: 'Timing',
    dependents: [],
    description:
      'A small MIDI Beat Clock implementation with millisecond precision.',
    manifest: {
      name: 'opal-instruments/tiny-midi-clock',
      version: '1.0.0',
      src: ['src/midi_clock.h', 'src/midi_clock.c'],
      repo: 'opal-instruments/tiny-midi-clock',
      keywords: ['midi', 'clock', 'bpm', 'ppqn'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'opal-instruments/tiny-midi-clock',
    slug: 'opal-instruments-tiny-midi-clock',
    url: 'https://github.com/opal-instruments/tiny-midi-clock',
    license: 'Unlicensed'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'periodically execute commands',
    manifest: {
      name: 'visionmedia/watch',
      version: '0.3.1',
      repo: 'visionmedia/watch',
      description: 'Execute commands at a regular interval',
      keywords: ['watch'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'visionmedia/watch',
    slug: 'visionmedia-watch',
    url: 'https://github.com/visionmedia/watch',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'simple process monitoring',
    manifest: {
      name: 'visionmedia/mon',
      version: '1.2.2',
      repo: 'visionmedia/mon',
      description: 'Simple process monitoring',
      keywords: ['process', 'monitoring', 'monitor', 'availability'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'visionmedia/mon',
    slug: 'visionmedia-mon',
    url: 'https://github.com/visionmedia/mon',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'display histograms from static or streaming input',
    manifest: {
      name: 'visionmedia/histo',
      version: '0.0.1',
      repo: 'visionmedia/histo',
      description: 'histogram plotting from arbitrary static or dynamic input',
      keywords: ['histogram', 'chart', 'graph', 'plot', 'stats', 'statistics'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'visionmedia/histo',
    slug: 'visionmedia-histo',
    url: 'https://github.com/visionmedia/histo',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'get file extensions from arguments',
    manifest: {
      name: 'jb55/extname',
      version: '1.1.0',
      repo: 'jb55/extname',
      description: 'cli extname',
      keywords: ['extname', 'extension'],
      dependencies: { 'jb55/extname.c': '*' },
      license: 'MIT',
      install: 'make install'
    },
    name: 'jb55/extname',
    slug: 'jb55-extname',
    url: 'https://github.com/jb55/extname',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Sample input given some probability',
    manifest: {
      name: 'jb55/samp',
      version: '0.0.3',
      repo: 'jb55/samp',
      description: 'randomly sample lines from a file',
      keywords: ['sample', 'random', 'bin'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'jb55/samp',
    slug: 'jb55-samp',
    url: 'https://github.com/jb55/samp',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Get the executable path from a pid on OSX',
    manifest: {
      name: 'jb55/pidpath',
      version: '0.0.1',
      repo: 'jb55/pidpath',
      description: 'get the executable absolute path from a pid',
      keywords: ['pid'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'jb55/pidpath',
    slug: 'jb55-pidpath',
    url: 'https://github.com/jb55/pidpath',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Command line utility for operations on a sophia database',
    manifest: {
      name: 'sphia/sphia',
      version: '0.0.9',
      repo: 'sphia/sphia',
      description: 'Command line utility for reading a sophia database',
      keywords: ['sophia', 'sphia', 'cli', 'util'],
      license: 'MIT',
      install: 'make install',
      dependencies: {
        'clibs/commander': '*',
        'stephenmathieson/case.c': '*',
        'clibs/inih': '*',
        'jwerle/repl.h': '*',
        'stephenmathieson/str-ends-with.c': '*',
        'stephenmathieson/str-flatten.c': '*',
        'stephenmathieson/trim.c': '*',
        'clibs/which': '*'
      }
    },
    name: 'sphia/sphia',
    slug: 'sphia-sphia',
    url: 'https://github.com/sphia/sphia',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'convert tabs to spaces in files',
    manifest: {
      name: 'stephenmathieson/tabs-to-spaces',
      version: '1.0.0',
      repo: 'stephenmathieson/tabs-to-spaces',
      description: 'CLI for converting tabs to spaces',
      keywords: ['tabs', 'spaces', 'convert'],
      license: 'MIT',
      install: 'make install',
      uninstall: 'make uninstall',
      dependencies: {
        'stephenmathieson/str-replace.c': '0.0.4',
        'clibs/commander': '1.3.2'
      }
    },
    name: 'stephenmathieson/tabs-to-spaces',
    slug: 'stephenmathieson-tabs-to-spaces',
    url: 'https://github.com/stephenmathieson/tabs-to-spaces',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'REPL for Sophia databases',
    manifest: {
      name: 'stephenmathieson/sophia-repl',
      version: '1.0.0',
      repo: 'stephenmathieson/sophia-repl',
      dependencies: {
        'stephenmathieson/substr.c': '*',
        'stephenmathieson/emitter.c': '0.1.0',
        'clibs/linenoise': '*'
      },
      install: 'make install',
      keywords: [],
      license: 'Unlicensed'
    },
    name: 'stephenmathieson/sophia-repl',
    slug: 'stephenmathieson-sophia-repl',
    url: 'https://github.com/stephenmathieson/sophia-repl',
    license: 'Unlicensed'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'A c++ repl for leveldb',
    manifest: {
      name: 'hij1nx/ldb',
      version: '2.3.0',
      repo: 'heapwolf/ldb',
      description: 'A c++ repl for leveldb',
      keywords: ['leveldb', 'repl', 'level', 'db'],
      license: 'MIT',
      install: 'make install',
      dependencies: { 'clibs/linenoise': '*', 'clibs/docopt': '*' },
      devDependencies: { ronn: '^0.4.0' }
    },
    name: 'hij1nx/ldb',
    slug: 'hij1nx-ldb',
    url: 'https://github.com/hij1nx/ldb',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'leveldb FUSE filesystem',
    manifest: {
      name: 'tomerdmnt/levelfs',
      version: '0.1.0',
      repo: 'tomerdmnt/levelfs',
      description: 'leveldb FUSE filesystem',
      keywords: ['leveldb', 'level', 'fuse', 'fs', 'filesystem'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'tomerdmnt/levelfs',
    slug: 'tomerdmnt-levelfs',
    url: 'https://github.com/tomerdmnt/levelfs',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Outputs current CPU temperature in °C for OSX',
    manifest: {
      name: 'lavoiesl/osx-cpu-temp',
      version: '1.1.0',
      repo: 'lavoiesl/osx-cpu-temp',
      description: 'Outputs current CPU temperature in °C for OSX',
      keywords: ['osx', 'cpu', 'temperature', 'sensors'],
      install: 'make install',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'lavoiesl/osx-cpu-temp',
    slug: 'lavoiesl-osx-cpu-temp',
    url: 'https://github.com/lavoiesl/osx-cpu-temp',
    license: 'Unlicensed'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'A utility for running arbitrary commands when files change',
    manifest: {
      name: 'clibs/entr',
      version: '3.4.0',
      repo: 'clibs/entr',
      description: 'A utility for running arbitrary commands when files change',
      keywords: ['watch', 'make', 'entr', 'fs', 'file'],
      install: './configure && make test install',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'clibs/entr',
    slug: 'clibs-entr',
    url: 'https://github.com/clibs/entr',
    license: 'Unlicensed'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'less opinionated clib-install for non clib-enabled repos',
    manifest: {
      name: 'stephenmathieson/ghi',
      version: '0.2.2',
      description: 'github repo installer',
      keywords: ['github', 'install'],
      license: 'MIT',
      repo: 'stephenmathieson/ghi',
      dependencies: {
        'stephenmathieson/tempdir.c': '0.0.2',
        'littlstar/asprintf.c': '0.0.3',
        'stephenmathieson/http-get.c': '0.1.1',
        'stephenmathieson/parse-repo.c': '1.1.1',
        'stephenmathieson/mkdirp.c': '0.1.5',
        'stephenmathieson/batch.c': '0.0.0',
        'clibs/commander': '1.3.2',
        'clibs/strdup': '0.0.0',
        'clibs/logger': '0.0.1'
      },
      install: 'make install',
      uninstall: 'make uninstall'
    },
    name: 'stephenmathieson/ghi',
    slug: 'stephenmathieson-ghi',
    url: 'https://github.com/stephenmathieson/ghi',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Set and get application URI schemes for OS X',
    manifest: {
      name: 'jwerle/suri',
      version: '0.0.4',
      repo: 'jwerle/suri',
      description: 'Set and get application URI schemes for OS X',
      keywords: ['application', 'uri', 'scheme', 'osx'],
      install: 'make suri install',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'jwerle/suri',
    slug: 'jwerle-suri',
    url: 'https://github.com/jwerle/suri',
    license: 'Unlicensed'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Porter Stemmer CLI',
    manifest: {
      name: 'wooorm/stmr',
      version: '1.0.0',
      description: 'Porter Stemmer CLI',
      license: 'MIT',
      repo: 'wooorm/stmr',
      keywords: ['martin', 'porter', 'stemmer', 'algorithm', 'bin', 'cli'],
      dependencies: { 'wooorm/stmr.c': '*' },
      install: 'make install'
    },
    name: 'wooorm/stmr',
    slug: 'wooorm-stmr',
    url: 'https://github.com/wooorm/stmr',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'make headers from .c source files',
    manifest: {
      name: 'andik/makeheaders',
      version: '1.4.0',
      repo: 'andik/makeheaders',
      description: 'clib package of http://www.hwaci.com/sw/mkhdr/',
      keywords: ['makeheaders'],
      license: 'BSD',
      src: ['src/makeheaders.c'],
      install: 'make install',
      dependencies: {}
    },
    name: 'andik/makeheaders',
    slug: 'andik-makeheaders',
    url: 'https://github.com/andik/makeheaders.git',
    license: 'BSD'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'Levenshtein’s string edit distance algorithm CLI',
    manifest: {
      name: 'wooorm/levenshtein',
      version: '1.1.1',
      description: 'Levenshtein algorithm CLI',
      license: 'MIT',
      keywords: [
        'Vladimir',
        'Levenshtein',
        'algorithm',
        'edit',
        'distance',
        'bin',
        'cli'
      ],
      repo: 'wooorm/levenshtein',
      dependencies: { 'wooorm/levenshtein.c': '*' },
      install: 'make install'
    },
    name: 'wooorm/levenshtein',
    slug: 'wooorm-levenshtein',
    url: 'https://github.com/wooorm/levenshtein',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description: 'C No Scope Commits: Angular commits minus scope and stuff',
    manifest: {
      name: 'nilsding/cnsc',
      version: '0.1.2',
      repo: 'nilsding/cnsc',
      description: 'C No Scope Commits',
      keywords: ['git', 'commit', 'development', 'angular', 'retrospring'],
      license: 'MIT',
      install: 'make install',
      dependencies: {}
    },
    name: 'nilsding/cnsc',
    slug: 'nilsding-cnsc',
    url: 'https://github.com/nilsding/cnsc',
    license: 'MIT'
  },
  {
    category: 'Executables',
    dependents: [],
    description:
      'Glisy example rendering glsl-earth and using glsl-fog for fade in effects.',
    manifest: {
      name: 'glisy/glisy-earth',
      version: '0.0.2',
      repo: 'glisy/glisy-earth',
      description:
        'Glisy example rendering glsl-earth and using glsl-fog for fade in effects.',
      keywords: ['glsl', 'stack.gl', 'earth'],
      global: true,
      install: 'make && cp -f program ${PREFIX:-/usr/local}/bin/glisy-earth',
      dependencies: {
        'glisy/glfw-shell': '0.0.5',
        'glisy/geometry': '0.0.2',
        'glisy/uniform': '0.0.1',
        'glisy/program': '0.0.4',
        'glisy/shader': '0.0.1',
        'glisy/color': '0.0.5',
        'glisy/math': '0.0.4',
        'glisy/gl': '0.0.1',
        'jwerle/fs.c': '0.1.2'
      },
      license: 'Unlicensed'
    },
    name: 'glisy/glisy-earth',
    slug: 'glisy-glisy-earth',
    url: 'glisy/glisy-earth',
    license: 'Unlicensed'
  },
  {
    category: 'Executables',
    dependents: [],
    description:
      'Glisy example using glsl-hash-blur and glsl-check from stack.gl',
    manifest: {
      name: 'glisy/glsl-checker-blur',
      version: '0.0.3',
      repo: 'glisy/glsl-checker-blur',
      description:
        'Glisy example using glsl-hash-blur and glsl-check from stack.gl',
      keywords: ['glsl', 'stack.gl', 'checker', 'blur'],
      global: true,
      install:
        'make && cp -f program ${PREFIX:-/usr/local}/bin/glsl-checker-blur',
      dependencies: {
        'glisy/glfw-shell': '0.0.5',
        'glisy/geometry': '0.0.2',
        'glisy/uniform': '0.0.1',
        'glisy/program': '0.0.4',
        'glisy/shader': '0.0.1',
        'glisy/color': '0.0.5',
        'glisy/math': '0.0.4',
        'glisy/gl': '0.0.1',
        'jwerle/fs.c': '0.1.2'
      },
      license: 'Unlicensed'
    },
    name: 'glisy/glsl-checker-blur',
    slug: 'glisy-glsl-checker-blur',
    url: 'glisy/glsl-checker-blurk',
    license: 'Unlicensed'
  },
  {
    category: 'OS Specific',
    dependents: ['daddinuz/liblogger'],
    description: 'ANSI color support on windows',
    manifest: {
      name: 'mattn/ansicolor-w32.c',
      version: '0.0.1',
      description: 'ANSI color support on windows',
      repo: 'mattn/ansicolor-w32.c',
      src: ['ansicolor-w32.h', 'ansicolor-w32.c'],
      scripts: { test: 'make test' },
      repository: {
        type: 'git',
        url: 'https://github.com/mattn/ansicolor-w32.c.git'
      },
      keywords: ['ansicolor-w32', 'ansi', 'color', 'windows', 'w32', 'win32'],
      author: 'Yasuhiro Matsumoto',
      license: 'MIT',
      bugs: { url: 'https://github.com/mattn/ansicolor-w32.c/issues' },
      dependencies: {}
    },
    name: 'mattn/ansicolor-w32.c',
    slug: 'mattn-ansicolor-w32-c',
    url: 'https://github.com/mattn/ansicolor-w32.c',
    license: 'MIT'
  },
  {
    category: 'OS Specific',
    dependents: [],
    description: 'Automatic dark mode in macOS',
    manifest: {
      name: 'onderweg/follow-the-sun',
      version: '1.0.2',
      repo: 'onderweg/follow-the-sun',
      description: 'Switch to Dark mode automatically after sunset',
      keywords: ['dark mode', 'macos'],
      install: 'make package_install',
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'onderweg/follow-the-sun',
    slug: 'onderweg-follow-the-sun',
    url: 'https://github.com/onderweg/follow-the-sun',
    license: 'Unlicensed'
  },
  {
    category: 'Plugins',
    dependents: [],
    description: 'plugin for uninstalling executables',
    manifest: {
      name: 'clibs/clib-uninstall',
      repo: 'clibs/clib-uninstall',
      version: '1.0.1',
      install: 'make install',
      uninstall: 'make uninstall',
      dependencies: {
        'kgabis/parson': '*',
        'stephenmathieson/http-get.c': '0.1.0',
        'Constellation/console-colors.c': '1.0.0',
        'littlstar/asprintf.c': '0.0.3',
        'stephenmathieson/substr.c': '0.1.2',
        'stephenmathieson/parse-repo.c': '1.1.1',
        'clibs/commander': '1.3.2',
        'clibs/strdup': '*',
        'clibs/logger': '*'
      },
      keywords: [],
      license: 'Unlicensed'
    },
    name: 'clibs/clib-uninstall',
    slug: 'clibs-clib-uninstall',
    url: 'https://github.com/clibs/clib-uninstall',
    license: 'Unlicensed'
  },
  {
    category: 'Plugins',
    dependents: [],
    description: 'validate a package.json',
    manifest: {
      name: 'clibs/clib-validate',
      repo: 'clibs/clib-validate',
      version: '0.1.1',
      license: 'MIT',
      description: 'validate your package.json',
      keywords: ['validate', 'json', 'package'],
      install: 'make install',
      uninstall: 'make uninstall',
      dependencies: {
        'stephenmathieson/parse-repo.c': '1.1.1',
        'kgabis/parson': '*',
        'stephenmathieson/path-join.c': '0.0.6',
        'clibs/logger': '0.0.1',
        'clibs/strdup': '0.0.0'
      }
    },
    name: 'clibs/clib-validate',
    slug: 'clibs-clib-validate',
    url: 'https://github.com/clibs/clib-validate',
    license: 'MIT'
  },
  {
    category: 'Math',
    dependents: [],
    description:
      'A pure-C math library with a great variety of mathematical functions. Seeks to be close to C89/C90 compliant for portability.',
    manifest: {
      name: 'scientificc/cmathl',
      version: '1.10.4',
      repo: 'ScientificC/cmathl',
      description:
        'A pure-C math library with a great variety of mathematical functions. Seeks to be close to C89/C90 compliant for portability.',
      keywords: [],
      license: 'MIT',
      install: './install.sh',
      development: {
        'ScientificC/errno': '1.0.0',
        'ScientificC/vector': '1.0.0'
      },
      dependencies: {}
    },
    name: 'scientificc/cmathl',
    slug: 'scientific-c-cmathl',
    url: 'https://github.com/ScientificC/cmathl',
    license: 'MIT'
  },
  {
    category: 'Math',
    dependents: [],
    description: "Bresenham's line drawing algorithm",
    manifest: {
      name: 'jb55/bresenham-line.c',
      version: '0.0.1',
      repo: 'jb55/bresenham-line.c',
      description: "Bresenham's line drawing algorithm",
      keywords: ['bresenham'],
      license: 'MIT',
      src: ['bresenham_line.c', 'bresenham_line.h'],
      dependencies: {}
    },
    name: 'jb55/bresenham-line.c',
    slug: 'jb55-bresenham-line-c',
    url: 'https://github.com/jb55/bresenham-line.c',
    license: 'MIT'
  },
  {
    category: 'Math',
    dependents: [],
    description: 'Basic implementation of 3d vector and quaternion',
    manifest: {
      name: 'mauromombelli/trigonomec',
      version: '0.0.1',
      repo: 'MauroMombelli/TrigonomeC',
      description: 'Helper trigonometry function',
      keywords: ['trigonometry', 'quaternion', 'vector', '3d'],
      src: [
        'my_math.c',
        'my_math.h',
        'quaternionf.h',
        'vector3f.h',
        'vector3i16.h'
      ],
      license: 'LGPL',
      dependencies: {}
    },
    name: 'mauromombelli/trigonomec',
    slug: 'mauro-mombelli-trigonome-c',
    url: 'https://github.com/MauroMombelli/TrigonomeC',
    license: 'LGPL'
  },
  {
    category: 'Math',
    dependents: [],
    description: 'min and max functions',
    manifest: {
      name: 'willemt/minmax',
      version: '0.0.1',
      repo: 'willemt/minmax',
      description: 'min and max functions',
      keywords: ['comparison'],
      license: 'public domain',
      src: ['include/minmax.h'],
      dependencies: {}
    },
    name: 'willemt/minmax',
    slug: 'willemt-minmax',
    url: 'https://github.com/willemt/minmax',
    license: 'public domain'
  },
  {
    category: 'OpenGL',
    dependents: ['glisy/glisy-earth', 'glisy/glsl-checker-blur'],
    description: 'Common linear algebra functions for OpenGL',
    manifest: {
      name: 'glisy/math',
      version: '0.1.1',
      repo: 'glisy/math',
      description: 'Math functions for Glisy',
      keywords: ['glisy', 'math', 'matrix', 'vector'],
      src: [
        'include/glisy/vector.h',
        'include/glisy/matrix.h',
        'include/glisy/euler.h',
        'include/glisy/math.h',
        'include/glisy/vec2.h',
        'include/glisy/vec3.h',
        'include/glisy/vec4.h',
        'include/glisy/quat.h',
        'include/glisy/mat2.h',
        'include/glisy/mat3.h',
        'include/glisy/mat4.h'
      ],
      development: { 'jwerle/libok': '0.0.2' },
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'glisy/math',
    slug: 'glisy-math',
    url: 'https://github.com/glisy/math',
    license: 'Unlicensed'
  },
  {
    category: 'Math',
    dependents: [],
    description: 'Macro to clamp a value between two other values',
    manifest: {
      name: 'littlstar/clamp',
      version: '0.0.1',
      repo: 'littlstar/clamp',
      description: 'Clamp a value between two other values',
      keywords: ['clamp', 'value'],
      src: ['clamp.h'],
      development: { 'jwerle/libok': '0.0.2' },
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'littlstar/clamp',
    slug: 'littlstar-clamp',
    url: 'https://github.com/littlstar/clamp',
    license: 'Unlicensed'
  },
  {
    category: 'Math',
    dependents: ['catb0t/sparse'],
    description: 'yet another C bignum library for C99',
    manifest: {
      name: 'catb0t/yacbnl',
      version: '0.0.1',
      repo: 'catb0t/yacbnl',
      description: 'Yet Another C BigNum Library',
      keywords: ['math', 'bignum'],
      license: 'GPL v3',
      src: ['min/yacbnl.min.c', 'min/yacbnl.min.h', 'README.md', 'LICENSE'],
      dependencies: {}
    },
    name: 'catb0t/yacbnl',
    slug: 'catb0t-yacbnl',
    url: 'https://github.com/catb0t/yacbnl',
    license: 'GPL v3'
  },
  {
    category: 'AVR',
    dependents: [],
    description: 'max7219 LED Driver for AVR devices.',
    manifest: {
      name: 'opal-instruments/max7219-avr',
      version: '1.0.1',
      src: ['src/max7219.h', 'src/max7219.c'],
      repo: 'opal-instruments/max7219-avr',
      keywords: ['max7219', 'avr'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'opal-instruments/max7219-avr',
    slug: 'opal-instruments-max7219-avr',
    url: 'https://github.com/opal-instruments/max7219-avr',
    license: 'Unlicensed'
  },
  {
    category: 'OpenGL',
    dependents: [],
    description: 'Higher level operations for OpenGL',
    manifest: {
      name: 'glisy/glisy',
      version: '0.0.2',
      repo: 'glisy/glisy',
      description: 'Higher level operations for OpenGLES in C(99)',
      keywords: ['opengl', 'gl', 'glsl'],
      src: [],
      dependencies: {
        'glisy/geometry': 'master',
        'glisy/program': 'master',
        'glisy/uniform': 'master',
        'glisy/texture': 'master',
        'glisy/camera': 'master',
        'glisy/buffer': 'master',
        'glisy/shader': 'master',
        'glisy/color': 'master',
        'glisy/math': 'master',
        'glisy/ease': 'master',
        'glisy/vao': 'master',
        'glisy/gl': 'master'
      },
      development: {
        'littlstar/sop': 'master',
        'jwerle/fs.c': 'master',
        'glisy/glfw-shell': 'master'
      },
      license: 'Unlicensed'
    },
    name: 'glisy/glisy',
    slug: 'glisy-glisy',
    url: 'https://github.com/glisy/glisy',
    license: 'Unlicensed'
  },
  {
    category: 'OpenGL',
    dependents: ['glisy/glisy-earth', 'glisy/glsl-checker-blur'],
    description: 'Setup a GLFW context and render loop now',
    manifest: {
      name: 'glisy/glfw-shell',
      version: '0.0.5',
      repo: 'glisy/glfw-shell',
      description: 'GLFW context creation and render loop helper',
      keywords: ['glisy', 'open', 'gl', 'glfw'],
      src: ['include/glfw-shell.h'],
      dependencies: { 'glisy/gl': 'master' },
      license: 'Unlicensed'
    },
    name: 'glisy/glfw-shell',
    slug: 'glisy-glfw-shell',
    url: 'https://github.com/glisy/glfw-shell',
    license: 'Unlicensed'
  },
  {
    category: 'OpenGL',
    dependents: ['glisy/glisy'],
    description: 'Common easing functions',
    manifest: {
      name: 'glisy/ease',
      version: '0.0.2',
      repo: 'glisy/ease',
      description: 'Easing function macros',
      keywords: ['gl', 'glisy', 'easing'],
      src: ['include/glisy/ease.h'],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'glisy/ease',
    slug: 'glisy-ease',
    url: 'https://github.com/glisy/ease',
    license: 'Unlicensed'
  },
  {
    category: 'OpenGL',
    dependents: [],
    description:
      'Simple OBJ Parser for deriving simplicial complexes and material data from .obj file formats exported from Blender/Max',
    manifest: {
      name: 'littlstar/sop',
      version: '0.0.7',
      repo: 'littlstar/sop',
      description: 'Simple OBJ File Format Parser written in C99',
      keywords: ['obj', 'parser', 'opengl', 'graphics'],
      src: ['include/sop/sop.h', 'src/sop.c'],
      development: {
        'clibs/commander': '1.3.2',
        'jwerle/fs.c': '0.1.2',
        'jwerle/libok': '0.0.2',
        'glisy/glisy': 'master',
        'glisy/glfw-shell': 'master'
      },
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'littlstar/sop',
    slug: 'littlstar-sop',
    url: 'https://github.com/littlstar/sop',
    license: 'Unlicensed'
  },
  {
    category: 'OpenGL',
    dependents: [],
    description: 'Simple OpenGL Image Library',
    manifest: {
      name: 'littlstar/soil',
      version: '0.1.1',
      repo: 'littlstar/soil',
      description: 'Simple OpenGL Image Library',
      keywords: ['soil', 'opengl', 'gl', 'image'],
      configure: 'configure',
      makefile: 'Makefile',
      src: [
        'include/SOIL/SOIL.h',
        'include/SOIL/image_dxt.h',
        'include/SOIL/image_helper.h',
        'include/SOIL/stb_image_aug.h',
        'include/SOIL/stbi_dds_aug.h',
        'include/SOIL/stbi_dds_aug_c.h',
        'src/soil.c',
        'src/image_dxt.c',
        'src/image_helper.c',
        'src/stb_image_aug.c',
        'configure',
        'Makefile.in'
      ],
      license: 'Unlicensed',
      dependencies: {}
    },
    name: 'littlstar/soil',
    slug: 'littlstar-soil',
    url: 'https://github.com/littlstar/soil',
    license: 'Unlicensed'
  },
  {
    category: 'Profiling',
    dependents: [],
    description:
      'A memory tracer useful to analyze memory usage or detect leaks.',
    manifest: {
      name: 'daddinuz/watchdog',
      repo: 'daddinuz/watchdog',
      version: '1.0.0',
      license: 'MIT',
      description:
        'C99-compliant runtime memory tracer library useful to find memory leaks or analyze memory usage.',
      keywords: [
        'leaks',
        'memory',
        'memory-leaks',
        'memory-tracer',
        'memory-leak-detection'
      ],
      src: ['sources/watchdog.h', 'sources/watchdog.c'],
      dependencies: { 'daddinuz/process': '0.3.0', 'daddinuz/panic': '1.0.0' },
      makefile: 'sources/build.cmake'
    },
    name: 'daddinuz/watchdog',
    slug: 'daddinuz-watchdog',
    url: 'https://github.com/daddinuz/watchdog',
    license: 'MIT'
  }
]

export const updatedAt = new Date(
  'Fri Aug 06 2021 00:15:27 GMT+0000 (Coordinated Universal Time)'
)

export const revision = '3d22cae11382aac1c7e31c39da6e7392f8a273fe'
