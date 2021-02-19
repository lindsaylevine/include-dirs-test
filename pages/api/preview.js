export default (req, res) => {
  // Enable Preview Mode by setting the cookies
  const { slug } = req.query;
  res.setPreviewData({})
  // res.writeHead(307, { Location: "/" });
  const url = `/fallback/${slug}`
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )
  res.end('preview mode enabled')
}
