const configBuilder = () => {
    const nodeenv = process.env.NODE_ENV;
    let envName = 'prodgithub'
    switch (import.meta.env.VITE_MODE_NAME) {
          case 'development':
                envName = 'development';
                break;
        case 'prodgithub':
            envName = 'prodgithub';
            break;
        case 'prodfirebase':
        default:
            envName = 'prodfirebase';

    }
    return {
        nodeENV: nodeenv,
        environmentName: envName,
    };
}

export const appConfig = configBuilder();
