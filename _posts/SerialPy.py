import serial
import pyautogui
import time


port = "/dev/cu.usbmodem14201"
ser = serial.Serial(port,9600)
value = 0 

def clicky():
	pyautogui.click(198,1015)
	pyautogui.click(1523,70)
	pyautogui.click(618, 453)
	time.sleep(20000)
	pyautogui.click (0,0)
	exit()

while 1:
	value = ser.read();
	print (value)
	if value == b'0':
		clicky()
		continue 