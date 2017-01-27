# newtab
Chrome extension that opens links in new tab based on CSS selector

# Example config
This configuration opens articles and comments on HackerNews in a new tab
```json
{
  "news.ycombinator.com": [
    "a.storylink",
    "td.subtext>a[href^='item']"
  ]
}
```

# Notes
Because it uses `document.querySelector` CSS pseudo-elements do not work
