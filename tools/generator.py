#%%
import pandas as pd
import json
import unidecode
import os

#%%
d = pd.read_csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vSHXeiweX3adlBZ1wHjNu_5aD8Rww_jsFXQqEoL1Xx4HY3msbfTwSbGER3ojkZO3-D5cNTh3abzjrOH/pub?gid=313175917&single=true&output=csv')

#%%
d.fillna('', inplace=True)

#%%
present = list(os.listdir('./foto'))

#%%
d[['j', 'p']] = d[['j', 'p']].applymap(lambda x: x.lower().capitalize())
d.drop(columns=['kor', 'edit'], inplace=True)
d.f = d.p.apply(lambda x: unidecode.unidecode(x.lower()) + '.jpg')
d.f = d.f.apply(lambda x: x if x in present else 'face.jpg')

#%%
with open('./data/data.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(list(d.to_dict(orient='index').values()),  ensure_ascii=False))


#%%
