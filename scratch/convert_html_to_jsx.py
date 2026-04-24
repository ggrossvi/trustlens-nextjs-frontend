import sys
import re

def convert(filepath, outpath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Extract just the <main> block
    match = re.search(r'<main.*?</main>', content, re.DOTALL)
    if not match:
        print(f"No <main> tag found in {filepath}")
        return
    main_content = match.group(0)

    # Convert class to className
    jsx = re.sub(r'\bclass=', 'className=', main_content)
    # Convert for to htmlFor
    jsx = re.sub(r'\bfor=', 'htmlFor=', jsx)
    
    # Self-close specific tags
    jsx = re.sub(r'(<input[^>]+?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<img[^>]+?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<br[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', jsx)

    # Convert HTML comments to JSX comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx, flags=re.DOTALL)

    # Handle style attributes (basic heuristic: style="...")
    def style_repl(m):
        style_str = m.group(1)
        # simplistic conversion
        rules = style_str.split(';')
        style_obj = []
        for rule in rules:
            if not rule.strip(): continue
            k, v = rule.split(':', 1)
            k = k.strip()
            v = v.strip()
            # camelCase the key
            k = re.sub(r'-([a-z])', lambda x: x.group(1).upper(), k)
            style_obj.append(f"'{k}': '{v}'")
        return 'style={{' + ', '.join(style_obj) + '}}'
        
    jsx = re.sub(r'style="([^"]*)"', style_repl, jsx)

    file_content = f"""export default function Page() {{
  return (
    <>
      {jsx}
    </>
  );
}}
"""
    with open(outpath, 'w') as f:
        f.write(file_content)
    print(f"Converted {filepath} -> {outpath}")

if __name__ == '__main__':
    convert('scratch/query-sandbox.html', 'src/app/page.tsx')
    convert('scratch/dashboard.html', 'src/app/dashboard/page.tsx')
    convert('scratch/validate-document.html', 'src/app/validate/page.tsx')
    convert('scratch/document-filtering.html', 'src/app/filtering/page.tsx')
