import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import bot
import time

employeeDf = pd.read_excel('funcionarios_empresa.xlsx')

service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get("http://localhost:3000")

employeeNames = employeeDf['Nome']
employeeLastNames = employeeDf['Sobrenome']
employeePositions = employeeDf['Cargo']
employeeDepartments = employeeDf['Departamento']
employeeEmails = employeeDf['E-mail']
employeePhones = employeeDf['Telefone']

bot.clickButtonById(driver, "login")
time.sleep(2)
bot.fillAdmForm(driver, "Nathan", "nat1705")
bot.clickButtonById(driver, "logar")
# for i in range(len(employeeNames)):
#     bot.fillEmployeeForm(
#         driver, employeeNames[i], employeeLastNames[i], employeePositions[i], employeeDepartments[i], employeeEmails[i], employeePhones[i]
#         )
#     time.sleep(2)
driver.quit()