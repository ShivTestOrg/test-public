const { fixBug } = require('./fix_bug_issue');

describe('Bug Fix Functionality', () => {
  it('should successfully fix the bug', async () => {
    const result = await fixBug();
    expect(result.success).toBe(true);
    expect(result.fixedBug).toBeDefined();
  });

  it('should throw an error if bug cannot be fixed', async () => {
    jest.spyOn(global, 'findBug').mockReturnValueOnce(null);
    await expect(fixBug()).rejects.toThrow('Bug not found');
  });
});