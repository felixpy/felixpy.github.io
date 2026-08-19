# Repository Instructions

## 时区与发布日期

- 本仓库的站点标准时区为 `Asia/Shanghai`（UTC+8）。`_config.yml` 必须保留 `timezone: Asia/Shanghai`，不得依赖构建服务器的本地时区。
- `_posts/` 下每篇文章的 frontmatter 必须显式声明 UTC 偏移，统一使用 `date: YYYY-MM-DD HH:mm:ss +0800`。禁止省略 `+0800`，因为 Jekyll 会把无偏移量的显式日期按 UTC 解析。
- 文件名中的 `YYYY-MM-DD` 必须与 frontmatter 日期换算到 `Asia/Shanghai` 后的自然日一致。
- 默认按立即发布处理时，文章日期不得晚于提交或自动任务执行时间。只有用户明确要求定时或未来发布时，才允许填写未来日期，并应在交付说明中注明计划发布时间。
- 新增或修改文章后，必须执行完整 Jekyll 构建，并确认目标文章已经生成到 `_site/<year>/<month>/<day>/`。构建成功但日志出现 `has a future date` 不得视为发布成功。
