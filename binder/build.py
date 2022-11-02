
import json

from pathlib import Path

import requests
# import yaml

HERE = Path(".")
BINDER_URL = "https://mybinder.org"
DEFAULT_REF = "master"

# wait 10 minutes for each build
TIMEOUT = 60 * 10


def build_binder(repo, ref):
    url = f"{BINDER_URL}/build/gh/{repo}/{ref}"
    r = requests.get(url, stream=True, timeout=TIMEOUT)
    r.raise_for_status()
    for line in r.iter_lines():
        line = line.decode("utf8", "replace")
        if not line.startswith("data:"):
            continue

        data = json.loads(line.split(":", 1)[1])
        phase = data.get("phase", "")
        if not phase:
            continue

        if phase == "built":
            r.close()
            return


def build_all():
    build_binder("etcax-test/test-examples", "main")
#     gallery = HERE.parent / "_data/gallery.yaml"
#     with open(gallery, "r") as f:
#         examples = yaml.safe_load(f)

#     for example in examples:
#         repo = example.get("repo_url").replace("https://github.com/", "")
#         ref = example.get("ref", DEFAULT_REF)

#         print(f"Building a binder for {repo}@{ref}")
#         build_binder(repo, ref)


if __name__ == "__main__":
    build_all()
