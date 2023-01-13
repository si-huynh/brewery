module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: ['.ios.js', '.android.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@api': ['./src/api'],
                    '@components': './src/components',
                    '@hooks': './src/hooks',
                    '@navigator': ['./src/navigator'],
                    '@resources': './src/resources',
                    '@store': './src/store',
                    '@types': './src/types',
                },
            },
        ],
    ],
}
