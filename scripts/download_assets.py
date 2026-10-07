import urllib.request
import os
import time

DEST_DIR = "/Users/apple/Documents/AgenticCoding/Freshco/public/products"
os.makedirs(DEST_DIR, exist_ok=True)

downloads = [
    # Reusable Glass Goli Soda
    ("goli-jeera.png", "16JSeInsra5lNn1DtVOQhgd6oFmWuNFFs"),
    ("goli-lemon.png", "1fNwd7_8njWggl-e2WCTDER19GFW5aoZd"),
    ("goli-blueberry.png", "1hqE69C7X3OXIftqo4n7lEntY2fiY_bqS"),
    ("goli-redguava.png", "1v0Do2iBZ3QOFVxsmIez-htTbHeblCb32"),
    ("goli-kachaaam.png", "19YsO-KlX4vUb_FXenSwcxdz5VYJnmR5w"),
    ("goli-orange.png", "13aSpc1W-b3hltiaEul_clxFxzFmkw8vE"),
    ("goli-pineapple.png", "1BVPuLzmbJshpYzLE-8-yPQVOWKtmRfh5"),
    ("goli-pinklemon.png", "1r4yRZVY3FaTSVvnoalOyoGBK7QC05mtS"),
    ("goli-cola.png", "1NoadX0ZMDfZdbSbPxWOzJhwNmQdaccRS"),
    ("goli-kokum.png", "1XW1w6eKp241VLNUx0R-XRHBAKqO5kDkE"),
    ("goli-kalakhatta.png", "1mGTLXWMlzDfPqQMFkHdgIq7ONmKWVbbF"),
    ("goli-greenapple.png", "1j6bJxApbc0B0bMvrKQ8mTDho8329n2q6"),
    
    # Hero & Group Compositions
    ("group-all-products.png", "1ouXW9Xk63n8gv_zYgdBfHpoUOBXMJ9NV"),
    ("group-glass-bottles.png", "1BL7WVvCxkLAJRx3gAV-1AZylalWWRKa0"),
    ("group-plastic-bottles.png", "1DUT5MyUafb_Usdd09tgrOj6JbOsDoVy9"),
    ("group-all-flavours.png", "1J3YA5mPrQ5yo2yDX_dOOc_MpY0FkYr1y"),

    # Cans
    ("can-01.png", "1VRYinXL1fLlZWdQVQbmJwPTH60B6_2wC"),
    ("can-02.png", "114uo_ljyhgLbJrQ_kHDFHU49f1ZMuIkA"),
    ("can-03.png", "1eGiKBJkNpYb8MHcfCGiEBjSlB-33FAQw"),
    ("can-04.png", "1CyAYjTr9FEv_0xUbJjX6U0PDUm4JMhKk"),

    # Energy & Carbonated
    ("energy-drink.png", "19hhVfzTODdUo24pu6yhuw40WJbOn6H1_"),
    ("carbonated-drinks.png", "1usN8cmoM_sJwYDdISlz0mZk5fI07zz3a"),
    ("carbonated-salt-lemon.png", "1VClI51StJzmoxsCU2vEZL8utFMzheywT"),
    ("carbonated-pink-lemon.png", "1Gc3VT27Ye9lFe_iPn3sIWT7hciYzvDtL"),

    # Jelly Drinks
    ("jelly-passion-fruit.png", "1sQ3WbZVzU8YJYmKZD65hyRlUtGrkJzs2"),
    ("jelly-green-grape.png", "1hHp-lUdUq5YMSUNXIPwFnQca1DmhE-Jq"),
    ("jelly-mango.png", "1UikSnUee4yswOPFzLQilvA8ABZ5-cHp0"),
    ("jelly-watermelon.png", "13HU1FHk4plz50XUdpKeU5ent076H0nop"),

    # Juices
    ("juice-litchi.png", "1zGXW30fzw20mNxiVd6G15sW9iln7b2wY"),
    ("juice-mango.png", "1urX7l-g3fyWjI9xIWP5RVeLYUHVr5QfH"),
    ("juice-redguava.png", "1_fvcrhStRm-I4YnzbrMhqv5LLRoz439K"),

    # Ice Pops
    ("icepop.png", "1IyEM2zfJyktGgZGda67c6mGiD0XHmpIp"),
    ("icepop-logo.png", "1Ge0U-MnusbwT39kEB7gAXjGXjfOP1mOO"),

    # Use and Throw Glass
    ("single-glass-01.png", "1XbXlCx2GsbpHXBFCr0hxJ0tYJyakxjAO"),
    ("single-glass-02.png", "1i7hsvQTbW-1BmJH5D3AG7VG8jQL_CJRd"),
    ("single-glass-03.png", "1qWXoXwSCV5-ZX5hYq3jmrD0ckYLNAP37"),

    # PET Bottles
    ("pet-lahori-jeera.png", "1iSBMK8kS2AjQ8dKW79XgqEbaHQpkOUG1"),
    ("pet-lemon-lime.png", "1QLGMpEVeyu5oZasSaCnkeO9fDJQQU83-"),
    ("pet-mint.png", "1gnht90hb3QW85103IzX_2GQ0CmNgSE1V"),
    ("pet-cranberry.png", "1dp1yz6NFxucB4UIO5-2bknYtR72UwFrg")
]

print(f"Downloading {len(downloads)} selected product assets to {DEST_DIR}...")

for filename, file_id in downloads:
    target_path = os.path.join(DEST_DIR, filename)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        print(f"  [Exists] {filename}")
        continue
    
    url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
    success = False
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
                with open(target_path, "wb") as f:
                    f.write(data)
                print(f"  [OK] {filename} ({len(data) // 1024} KB)")
                success = True
                break
        except Exception as e:
            print(f"  [Retry {attempt+1}] {filename}: {e}")
            time.sleep(1)
    if not success:
        print(f"  [FAILED] {filename}")

print("\nDownload complete!")
