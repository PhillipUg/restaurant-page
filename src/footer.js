const createFooter = () => {
  const linksArr = ['Advertise', 'Career', 'Privacy Policy', 'Contact Us'];

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const fb = document.createElement('i');
  fb.classList.add('fab', 'fa-facebook-f');
  const tw = document.createElement('i');
  tw.classList.add('fab', 'fa-twitter');
  const insta = document.createElement('i');
  insta.classList.add('fab', 'fa-instagram');
  const ul = document.createElement('ul');
  ul.classList.add('links');

  linksArr.forEach((link) => {
    const li = document.createElement('li');
    li.classList.add('links-items');
    li.innerText = link;
    ul.appendChild(li);
  })

  footer.appendChild(fb);
  footer.appendChild(tw);
  footer.appendChild(insta);
  footer.appendChild(ul);

  return footer;
};


export default createFooter;