#%%
import pandas as pd
import json

#%%
d = pd.read_csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vS7JPfqUa3UYJ5gbvp4Kp_-fJcdaOX3sUoTt4njFC5D0NKh68WFoG8PBptGdjPwO-vtmPYxZCSBFCPJ/pub?gid=0&single=true&output=csv')

#%%
d.fillna('', inplace=True)

#%%
with open('./data/data.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(list(d.to_dict(orient='index').values()),  ensure_ascii=False))
