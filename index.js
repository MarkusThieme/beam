let geometry = `line 50

# This is a comment 
#
  # 
   
#


curve 10 90 # comment

turn 90

line 50
`

let t = geometry;

t = t.replace(/\s*#.*/gm, ``) // delete any comments
t = t.replace(/\r/gm, ``) // convert CRLF to LF
t = t.replace(/\n\s*\n/gm, `\n`) // delete lines which just have white space
t = t.replace(/\n+/gm, `\n`) // delete completely empty lines
t = t.replace(/\n$/gm, ``) // delete the very last LF
t = t.split(/\n/gm) // convert to array of lines

console.log(t)

for (let l of t) {
  console.log(l)
  let m = l.match(/\s*line\s*(?<lenght>(\d\d*(\.\d*)?)|(\.\d\d*))/gm);
  console.log(m)
}


// /\s*line\s*(?<lenght>(\d\d*(\.\d*)?)|(\.\d\d*))/gm