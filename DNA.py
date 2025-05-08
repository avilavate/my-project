import pandas as pd

def analyze_dna_patterns(samples: pd.DataFrame) -> pd.DataFrame:
    samples['species']= samples['dna_sequence'].str.startswith('ATG')?