describe('reverse', () => {
	it('reverse word', () => {
		expect(util.reverse('abc')).toEqual('cbba')
	})

	it('reverse字符串长度为1时返回自己', () => {
		expect(util.reverse('a')).toBe('a')
	})

	it('reverse传值不是字符串时会抛异常', () => {
		expect(() => {util.reverse(null)}).toThrow()
	})
})