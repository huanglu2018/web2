
module.exports = {
	devServer: {
		publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
		proxy: {
			'/api': {
				target: 'http://peanutgdb.crigdaas.org.cn:8000/api',
				changeOrigin: true,
			},
			'/api2': {
				target: 'http://peanutgdb.crigdaas.org.cn:8988/api2',
				changeOrigin: true,
			},
		},
		//   css: {
		//      loaderOptions: {
		// 		sass: {
		// 			prependData: `@import "@/components/toolkit/material-kit.scss";`
		// 		}
		// 	 }
		//   },
		host: '0.0.0.0',
		port: 8080,
	},

}











