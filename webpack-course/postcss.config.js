if (process.env.NODE_ENV === 'production') { // npm i win-node-env for NODE_ENV=production work
    module.exports = {
        plugins: {
            autoprefixer: {},
            cssnano: {},
            'rucksack-css': {},
        },
    };
} else {
    module.exports = {
        plugins: {
            autoprefixer: {},
            'rucksack-css': {},
        },
    };
}
