const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block'
	},
	{
		key: 'Permissions-Policy',
		value: ''
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'Referrer-Policy',
		value: 'no-referrer'
	}
]

module.exports = {
	headers: async () => {
		return [
			{
				source: '/:path*',
				headers: securityHeaders
			}
		]
	}
}