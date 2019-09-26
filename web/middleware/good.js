const options = {
    ops: {
        interval: 20000,
    },
    reporters: {
        myConsoleReporter: [
            {
                module: "@hapi/good-console",
                args: [{
                    format: 'YYYYMMDD/HHmmss.SSS',
                }],
            },
            "stdout",
        ],
    },
};
module.exports=options;