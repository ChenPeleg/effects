const configBuilder = () => {
    const nodeenv = process.env.NODE_ENV;
    let envName = 'prodgithub';
    let soundUrlPrefix = '';
    switch (import.meta.env.VITE_MODE_NAME) {
        case 'development':
            envName = 'development';
            break;
        case 'prodgithub':
            envName = 'prodgithub';
            soundUrlPrefix = "/effects";
            break;
        case 'prodfirebase':
        default:
            envName = 'prodfirebase';

    }
    return {
        nodeENV: nodeenv,
        environmentName: envName,
        hasSaveOption: envName === 'prodfirebase',
        soundUrlPrefix,
    };
};

export const appConfig = configBuilder();
