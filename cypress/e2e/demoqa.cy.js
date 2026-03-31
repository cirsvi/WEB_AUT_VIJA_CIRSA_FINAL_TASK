import { PracticeFormPage } from "../pageObjects/practiceFormPage"

describe('Demo QA - Practice Form', () => {
  beforeEach(() => {
    PracticeFormPage.visit();
  })

  it('Validate form fields', () => {
    const firstName = 'Jane';
    const lastName = 'Doe';
    const email = 'jane.doe@example.com';
    const gender = 'Female';
    const phoneNumber = '2000000000';
    const birthYear = '1930';
    const birthMonth = 'February';
    const birthDay = '28';
    const subject = 'Economics';
    const hobby = 'Music';
    const address = "Delhi, India";
    const state = 'NCR';
    const city = 'Delhi';
    const pictureName = 'cat.jpg';
    


    PracticeFormPage.firstNameField.type(firstName);
    PracticeFormPage.lastNameField.type(lastName);
    PracticeFormPage.userEmailField.type(email);
    PracticeFormPage.getGenderField(gender).click();
    PracticeFormPage.userPhoneNumberField.type(phoneNumber);

    PracticeFormPage.birthDateField.click();
    PracticeFormPage.birthDateYearSelect.select(birthYear);
    PracticeFormPage.birthDateMonthSelect.select(birthMonth);
    PracticeFormPage.getBirthDateDay(birthDay).click();

    PracticeFormPage.subjectField.type(`${subject}{enter}`)
    PracticeFormPage.currentAddressField.type(address);
    PracticeFormPage.getHobbyLabel(hobby).click();
    PracticeFormPage.uploadPictureField.selectFile(`cypress/files/${pictureName}`);

    PracticeFormPage.stateField.type(`${state}{enter}`);
    PracticeFormPage.cityField.type(`${city}{enter}`);

    PracticeFormPage.submitButton.click();
  })
  
})