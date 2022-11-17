'use strict';
import {EventEmitter} from 'events/events';
import {BehaviorSubject} from 'rxjs';
import {ConnectEvt, ConnectMethod, User as _User} from './model';
import {DataStore as _DataStore, Browser as _Browser, Video as _Video, Monitor as _Monitor} from './model';

export let TermWS = null;
export const emitter = new (EventEmitter);
export const sep = '/';
export let Video = new _Video();
export let Monitor = new _Monitor();
export let User = new _User();
export const DataStore: _DataStore = {
  socket: TermWS,
  Nav: [{}],
  NavShow: true,
  Path: {},
  error: {},
  msg: {},
  logLevel: 4,
  showLeftBar: true,
  windowSize: [],
  autoLogin: false,
  guacamoleToken: '',
  guacamoleTokenTime: 0,
  termSelection: ''
};

export let Browser = new _Browser();
export const i18n = new Map();

export const connectEvt = new BehaviorSubject<ConnectEvt>(new ConnectEvt(null, null));

export const TYPE_WEB_CLI: ConnectMethod = {
  label: 'Web CLI',
  value: 'webCLI',
  requireXPack: false,
  protocol: 'http',
  client: false
};

export const TYPE_WEB_GUI: ConnectMethod = {
  label: 'Web GUI',
  value: 'webGUI',
  requireXPack: false,
  protocol: 'http',
  client: false
};

export const TYPE_DB_GUI: ConnectMethod = {
  label: 'Web GUI',
  value: 'dbGUI',
  requireXPack: true,
  protocol: 'http',
  client: false
};

export const TYPE_DB_CLIENT: ConnectMethod = {
  label: 'DB Client',
  value: 'dbClient',
  requireXPack: false,
  protocol: 'db',
  client: false
};

export const TYPE_RDP_CLIENT: ConnectMethod = {
  label: 'RDP Client',
  value: 'rdpClient',
  requireXPack: true,
  protocol: 'rdp',
  client: true
};

export const TYPE_RDP_FILE: ConnectMethod = {
  label: 'RDP File',
  value: 'rdpFile',
  requireXPack: true,
  protocol: 'rdp',
  client: false
};

export const TYPE_SSH_CLIENT: ConnectMethod = {
  label: 'SSH Client',
  value: 'sshClient',
  requireXPack: false,
  protocol: 'ssh',
  client: true
};

export const TYPE_WEB_SFTP: ConnectMethod = {
  label: 'WEB Sftp',
  value: 'webSftp',
  requireXPack: true,
  protocol: 'http',
  client: false
};

export const ProtocolConnectTypes = {
  ssh: [TYPE_WEB_CLI, TYPE_SSH_CLIENT],
  rdp: [TYPE_WEB_GUI, TYPE_RDP_CLIENT, TYPE_RDP_FILE],
  vnc: [TYPE_WEB_GUI],
  telnet: [TYPE_WEB_CLI],
  mysql: [TYPE_WEB_CLI, TYPE_DB_GUI, TYPE_DB_CLIENT],
  sqlserver: [TYPE_WEB_CLI],
  redis: [TYPE_WEB_CLI, TYPE_DB_CLIENT],
  mongodb: [TYPE_WEB_CLI],
  postgresql: [TYPE_WEB_CLI, TYPE_DB_GUI, TYPE_DB_CLIENT],
  oracle: [TYPE_DB_GUI, TYPE_DB_CLIENT],
  mariadb: [TYPE_WEB_CLI, TYPE_DB_GUI, TYPE_DB_CLIENT],
  k8s: [TYPE_WEB_CLI],
};
