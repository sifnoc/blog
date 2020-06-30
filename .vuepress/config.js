module.exports = {
	title: 'Sifnoc Blog',
	description: 'blog powered by vuepress with vercel.',
	theme: '@vuepress/theme-blog',
	themeConfig: {
		nav: [
			{
				text: 'Blog',
				link: '/',
			},
			{
				text: 'About',
				link: '/about',
			},
		],
		//footer: {
		//	contact: [
		//		{
		//		type: 'github',
		//		link: 'https://github.com/sifnoc',
		//		},
		//	]
		//}
	},
	//patterns: ['docs/*.md', 'docs/vuepress/*.md'],
	  plugins: [[
			  '@vuepress/blog',
		  {
			  directories: [
				  {
					  id: 'post',
					  dirname: 'docs',
					  path: '/',
					  pagination: {
						  lengthPerPage: 10,
					  },
				  },
			  ],
		  },
	  ],],
	dest: 'public'
}
