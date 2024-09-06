from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def findElement(driver: webdriver.Chrome, waySearch: str, elementId: str):
    types = {
        "id": By.ID,
        "class": By.CLASS_NAME
    }
    WebDriverWait(driver, 5).until(
        EC.presence_of_element_located(
            (types[waySearch], elementId)
        )
    )

def fillInputById(driver: webdriver.Chrome, elementId: str, data: str):
    findElement(driver, "id", elementId)
    field = driver.find_element(By.ID, elementId)
    field.clear()
    field.send_keys(data)

def clickButtonById(driver: webdriver.Chrome, buttonId: str):
    findElement(driver, "id", buttonId)
    botao = driver.find_element(By.ID, buttonId)
    botao.click()

def fillEmployeeForm(driver: webdriver.Chrome, name: str, lastName: str, position: str, department: str, email: str, phoneNumber: str):
    fillInputById(driver, "name", name)
    fillInputById(driver, "lastName", lastName)
    fillInputById(driver, "position", position)
    fillInputById(driver, "department", department)
    fillInputById(driver, "email", email)
    fillInputById(driver, "phoneNumber", phoneNumber)
    clickButtonById(driver, "cadastrar")

def fillAdmForm(driver: webdriver.Chrome, user: str, password: str):
    fillInputById(driver, "user", user)
    fillInputById(driver, "password", password)
    clickButtonById(driver, "logar")