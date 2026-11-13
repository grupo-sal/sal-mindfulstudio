<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep gallery photo metadata in `src/assets/gallery.ts`, using CDN WebP pointers at 640px and 1080px with responsive sources and lazy loading; this avoids original photo payloads and preserves portrait framing.
- Gallery images must fall back to bundled optimized JPEGs on CDN or decoding failure, including failures before hydration; the local copies intentionally avoid dependence on the same failing asset endpoint.
- Reveal gallery figures individually rather than the entire grid; a long gallery can exceed the observer's visibility threshold.
