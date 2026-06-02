# CV placeholder

The "Download CV" button in the Contact section links to:

```
/cv/nelson-jeanrenaud-cv.pdf
```

**This PDF does not exist yet — it is a documented placeholder.**

To activate the download, drop the real CV here with that exact filename:

```
public/cv/nelson-jeanrenaud-cv.pdf
```

No code change is required; the link in `src/components/Contact.astro`
already points to this path. If you prefer a different filename, update the
`cvHref` constant at the top of that component.
