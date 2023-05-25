const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

function toggleDropdownList() {
  dropdownList.classList.toggle('dropdown__list_active');
}

function selectDropdownItem(event) {
  event.preventDefault();
  dropdownList.classList.remove('dropdown__list_active');
  const newValue = this.textContent;
  dropdownValue.textContent = newValue;
}

dropdownValue.addEventListener('click', toggleDropdownList);
dropdownItems.forEach(item => {
  item.addEventListener('click', selectDropdownItem);
});