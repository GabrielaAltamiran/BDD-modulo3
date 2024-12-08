module.exports = function(api) {
    // Configurar el cache correctamente
    api.cache(true);

    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
