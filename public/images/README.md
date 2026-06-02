# Image placeholders

The site currently renders **hand-drawn SVG sketch placeholders** inside warm
Polaroid frames (hero portrait, industrial-vision workflow, motorsport data,
and the About workbench). These are intentional design elements, not empty
grey boxes, so the layout looks finished before real photos exist.

When real imagery is ready, add the files here and swap the inline `<svg
class="sketch">` placeholder inside the relevant component for an `<img>` tag.

Suggested filenames (from the content spec):

| Purpose                         | Component             | Suggested file                                  |
| ------------------------------- | --------------------- | ----------------------------------------------- |
| Portrait / personal image       | `Hero.astro`          | `images/portrait-placeholder.webp`              |
| Industrial vision snapshot      | `Work.astro` (featured) | `images/work-industrial-vision-placeholder.webp` |
| Motorsport / data visual        | `Work.astro` (personal) | `images/work-motorsport-data-placeholder.webp`  |
| Workbench / About visual        | `About.astro`         | `images/about-workbench-placeholder.webp`       |

Keep the polaroid aspect ratios in mind: hero/about use 4:5, the featured
work item uses 4:3, and the motorsport card uses 16:10.
