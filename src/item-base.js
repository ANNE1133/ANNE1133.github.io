export async function loadItem(templatePath, data, map) {
  const res = await fetch(templatePath)
  const html = await res.text()

  const temp = document.createElement("div")
  temp.innerHTML = html.trim()

  const item = temp.firstElementChild

  // วนลูปผ่าน mapping ทั้งหมด
  for (const [dataKey, selector] of Object.entries(map)) {
    let element

    // ✅ handle root element
    if (selector === ':root') {
      element = item
    } else {
      element = item.querySelector(selector)
    }

    if (!element) {
      console.warn(`⚠️ Element not found for selector: ${selector}`)
      continue
    }

    const value = data[dataKey]
    
    // ข้ามถ้าไม่มีค่าใน data
    if (!value) {
      console.warn(`⚠️ No data found for key: ${dataKey}`)
      continue
    }

    // ตั้งค่าตามประเภทของ element
    if (element.tagName === 'IMG') {
      element.src = value
      element.alt = data.title || ''
    } else if (element.tagName === 'A') {
      element.href = value
      console.log(`Set link href: ${value}`)
    } else {
      element.textContent = value
    }
  }

  return item
}