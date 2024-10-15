const label = document.querySelectorAll('label')
label.forEach(lbl => {
    lbl.innerHTML = lbl.innerText
        .split('')
        .map((ele, idx) => `<span style="transition-delay:${idx * 50}ms">${ele}</span>`)
        .join('')
})