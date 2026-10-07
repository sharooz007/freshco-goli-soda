import os
from PIL import Image

PRODUCTS_DIR = "/Users/apple/Documents/AgenticCoding/Freshco/public/products"

def optimize():
    for fname in os.listdir(PRODUCTS_DIR):
        if not fname.endswith(".png") or fname.endswith("-opt.png") or fname.endswith(".webp"):
            continue
        src = os.path.join(PRODUCTS_DIR, fname)
        webp_dest = os.path.join(PRODUCTS_DIR, fname.rsplit(".", 1)[0] + ".webp")
        if os.path.exists(webp_dest):
            continue
        try:
            im = Image.open(src)
            # Resize if height > 1200
            if im.height > 1200:
                ratio = 1200 / im.height
                new_w = int(im.width * ratio)
                im = im.resize((new_w, 1200), Image.Resampling.LANCZOS)
            im.save(webp_dest, "WEBP", quality=90)
            print(f"Optimized {fname} -> {os.path.basename(webp_dest)} ({os.path.getsize(webp_dest) // 1024} KB)")
        except Exception as e:
            print(f"Error optimizing {fname}: {e}")

if __name__ == "__main__":
    optimize()
