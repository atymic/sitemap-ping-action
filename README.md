# Sitemap Ping GitHub Action

This actions automatically pings search engines to notify them that your site has changed. For example, after deploying your static site you may want to notify
search engines that it's been updated.

**Supported Search Engines**
- Google

Feel free to PR more.

## Using the action

In your workflow definition file, add the following step. This should be after you've deployed your site.
You'll need to add the `SITEMAP_URL` secret in the repo's secrets management as well (or you could hardcode it in the pipeline).

```yaml
# .github/workflows/workflow.yml
jobs:
    deployment_job:
        ...
        steps:
            - actions/checkout@v1
            - run: deploy # Deploy your site
            - uses: atymic/sitemap-ping-action@master
              with:
                  sitemap-url: ${{ secrets.SITEMAP_URL }}
            - ... other steps
```
## Contributing

Javascript Actions Documentation: https://help.github.com/en/articles/creating-a-javascript-action

* Fork/Clone the repo.
* Run `yarn install` to fetch dependencies
* Make changes
* Update the README with any changes (if required)
* Create a PR *without* building the code (it's too hard to review the compiled code. I'll compile it before releasing)

# Licence

Code released under [the MIT license](LICENSE).
