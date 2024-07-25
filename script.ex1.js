const parser = new DOMParser();

const xmlString = `
    <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector('list');
const student  = [...listNode.querySelectorAll('student')]
const res = [];
student.forEach(student =>{
    const nameNode = student.querySelector('name')
    const firstName = student.querySelector('first')
    const secondName = student.querySelector('second')
    const ageNode = student.querySelector('age')
    const profNode = student.querySelector('prof')
    const language = nameNode.getAttribute('lang')

    res.push({
        name: `${firstName.textContent} ${secondName.textContent}`,
        age: ageNode.textContent,
        prof: profNode,
        lang: language
    })
})
const result = {
    list: res
}

console.log(result)
