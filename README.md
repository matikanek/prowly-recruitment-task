### Simple Angular 13 + NgRx app.

### ▶️ URL to the animals list: `http://localhost:4200/animals`

# **Tasks**

### 1. Create dummy component <app-animal-item>. It should display name and type of animal. Use this component in `AnimalsListComponent`.

### 2. Create new component with a form to add a new _virtual owner_ for an animal.

Form must have following fields:

- full name
- email
- animal select (with animals list from previous task) - it should be an input type select, form should store animal id, select field should display animal's name

### 3. Add custom email validator to the email field from previous task.

Validator should check:

- email address must not be from `prowly.com` domain
- provided email must not contain an email tag, a tag in email is added with a `+` sign before `@` (more about tags: https://support.google.com/manufacturers/answer/6184604?hl=en#:~:text=Email%20tags%20are%20a%20handy,address%20with%20the%20tag%20here.)
  (To DO! - chyba nie do końca rozumiem idei tego taga. Zapoznaj się bliżej z tematem. Do zrobienia będzie dodatkowy validator synchroniczny dla OwnerValidators a następnie podepnij go do kontrolki w formBuilderze)

### 4. In animals list (`AnimalsListComponent`), when user clicks on a specific animal, user should be redirected to the new virtual owner form component with clicked animal already chosen in select field.

Tutaj zastanawiałem się czy utworzyć nowy komponent i powielić niepotrzebnie kod formularza czy już we wcześniej utworzonym komponencie z formularzem wyróżnić jakiś editMode. (wybrałem to drugie chociaż przez
to rozwiązanie słabo wygląda moduł routingu w kontekście 6 zadania: komponent OwnerFormComponent jest raz lazy załadowany przez moduł w którym się znajduje dla route-a 'owners/new' a raz potrzebuję go dla
route-a animals/:animalId, przez co musiałem wyeksportować OwnerFormComponent z modułu Owner dla AppModule)

### 5. In animals list (`AnimalsListComponent`), we want to show animal's photo. Photo is stored in AnimalProfile. Use `getAnimalsProfiles` selector (take a look at `app/src/state`), and combine it with `getAnimals` selector. Remember to dispatch an action to get profiles.

### 6. Form component should be lazy-loaded. Move it to `src/app/lazy-modules`
