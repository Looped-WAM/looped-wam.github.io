# Looped-WAM Project Website

**Looped-WAM: Efficient Robotic Manipulation via Looped World Action Modeling**

Looped-WAM is a World Action Model for robotic manipulation. It shares Transformer blocks across recurrent iterations in its video backbone and action expert. During inference, the model can adjust recurrent depth to vary the amount of computation.

[Project website](https://looped-wam.github.io/) · [Paper PDF](assets/looped-wam.pdf) · [Research code](https://github.com/Looped-WAM/Looped-WAM) · [Hugging Face](https://huggingface.co/flyflying/Looped-WAM)

## Preview locally

From the directory containing `index.html`, run:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) in a browser. The website uses static HTML, CSS, and JavaScript and requires no build step.

## Add demonstration videos

The real-world section has four video slots per task. Place MP4 files in `assets/videos/` and set the `src` attribute on each corresponding `<video>` element in `index.html`. For example, use `src="./assets/videos/object-classification-1.mp4"` for the first object classification slot.

| Task | Slot IDs |
| --- | --- |
| Object classification | `object-classification-1` through `object-classification-4` |
| Block tower building | `block-tower-building-1` through `block-tower-building-4` |
| Fruit packing and pouring | `fruit-packing-and-pouring-1` through `fruit-packing-and-pouring-4` |

## Update the paper link

When the arXiv abstract URL is available, replace the `arxiv-link` placeholder with a link to that URL and update the BibTeX entry if needed.

## Publish with GitHub Pages

The site publishes from the root of the `main` branch. Keep `.nojekyll` in the repository root so GitHub Pages serves the static files directly. After pushing, check the **pages build and deployment** workflow in Actions.

If the build and artifact upload succeed but deployment returns HTTP 500 during a GitHub incident, check the [GitHub status page](https://www.githubstatus.com/) and rerun the failed jobs once the service recovers.

## Template credits

The website adapts the [Nerfies project page template](https://nerfies.github.io/) under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), with the [RDT-1B project page](https://rdt-robotics.github.io/rdt-robotics/) as a layout reference. Bulma 0.9.1 is distributed under the [MIT license](assets/bulma.LICENSE).
