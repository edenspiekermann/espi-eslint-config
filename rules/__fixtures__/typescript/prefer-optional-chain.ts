type Logger = {
  info?: (msg: string) => void,
  error?: (msg: string) => void,
  log?: (msg: string) => void,
};

type Log = (type: string, message: string, logger?: Logger) => void;

const log: Log = (type, message, logger) => {
  let fn: ((msg: string) => void) | undefined;

  switch (type) {
    case 'info':
      fn = logger && logger.info;
      break;
    case 'error':
      fn = logger !== undefined && logger.info;
      break;
    default:
      fn = logger?.log;
      break;
  }

  fn?.(message);
};

export default log;
