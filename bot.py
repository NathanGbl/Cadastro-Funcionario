import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def findElement(driver: webdriver.Chrome, elementType: str, elementName: str):
    types = {
        "id": By.ID,
        "class": By.CLASS_NAME
    }
    WebDriverWait(driver, 5).until(
        EC.presence_of_element_located(
            (types[elementType], elementName)
        )
    )

def fillEmployeeForm(driver: webdriver.Chrome, name: str, lastName: str, position: str, department: str, email: str, phoneNumber: str):
    findElement(driver, "id", "name")
    field = driver.find_element(By.ID, "name")
    field.clear()
    field.send_keys(name)

    findElement(driver, "id", "lastName")
    field = driver.find_element(By.ID, "lastName")
    field.clear()
    field.send_keys(lastName)

    findElement(driver, "id", "position")
    field = driver.find_element(By.ID, "position")
    field.clear()
    field.send_keys(position)

    findElement(driver, "id", "department")
    field = driver.find_element(By.ID, "department")
    field.clear()
    field.send_keys(department)

    findElement(driver, "id", "email")
    field = driver.find_element(By.ID, "email")
    field.clear()
    field.send_keys(email)

    findElement(driver, "id", "phoneNumber")
    field = driver.find_element(By.ID, "phoneNumber")
    field.clear()
    field.send_keys(phoneNumber)

# def fillAdmForm():
