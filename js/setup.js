'use strict';

var setupModule = document.querySelector('.setup');
setupModule.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (array) {
  for (var i = array.length - 1; i >= 4; i--) {
    var randomIndex = Math.floor(Math.random() * array.length);

    var randomElement = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = randomElement;
    array.splice(i, 1);
  }
  return array;
};
getRandom(WIZARD_NAMES);
getRandom(WIZARD_SURNAMES);
getRandom(COAT_COLORS);
getRandom(EYES_COLORS);

var wizards = [];
for (var j = 0; j < 4; j++) {
  wizards[j] =
    {
      name: WIZARD_NAMES[j] + ' ' + WIZARD_SURNAMES[j],
      coatColor: COAT_COLORS[j],
      eyesColor: EYES_COLORS[j]
    };
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();
for (var x = 0; x < wizards.length; x++) {
  fragment.appendChild(renderWizard(wizards[x]));
}


document.querySelector('.setup-similar').classList.remove('hidden');
similarListElement.appendChild(fragment);
