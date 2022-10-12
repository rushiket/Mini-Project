import numpy as np
import pandas as pd

pd.read_csv("static\data.csv", header=None).T.to_csv("static\data_output.csv", header=False, index=False)

data  = pd.read_csv("static\data.csv")
data.columns = [i.strip() for i in data.columns]
data = data.to_dict(orient='records')
