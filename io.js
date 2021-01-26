const mes = [
  { id: 'ME:1', label: 'ME 1'},
  { id: 'ME:2', label: 'ME 2'},
  { id: 'ME:3', label: 'ME 3'},
  { id: 'MME:1', label: 'MiniME 1'},
  { id: 'MME:1', label: 'MiniME 2'},
  { id: 'MME:1', label: 'MiniME 3'},
  { id: 'MME:1', label: 'MiniME 4'},
  { id: 'MSC:1', label: 'MultiScreen 1'},
  { id: 'MSC:1', label: 'MultiScreen 2'},
]

const meSources = [
  { id: 'ME:1:PGM', label: 'ME 1 PGM' },
  { id: 'ME:1:PST', label: 'ME 1 PST' },
  { id: 'ME:2:PGM', label: 'ME 2 PGM' },
  { id: 'ME:2:PST', label: 'ME 2 PST' },
  { id: 'ME:3:PGM', label: 'ME 3 PGM' },
  { id: 'ME:3:PST', label: 'ME 3 PST' },
  { id: 'MME:1', label: 'MiniME 1 PGM' },
  { id: 'MME:2', label: 'MiniME 2 PGM' },
  { id: 'MME:3', label: 'MiniME 3 PGM' },
  { id: 'MME:4', label: 'MiniME 4 PGM' },
  { id: 'MSC:1', label: 'MultiScreen 1 PGM' },
  { id: 'MSC:2', label: 'MultiScreen 2 PGM' }
]

const inputs = [
  { id: 'IN:1', label: 'Input 1' },
  { id: 'IN:2', label: 'Input 2' },
  { id: 'IN:3', label: 'Input 3' },
  { id: 'IN:4', label: 'Input 4' },
  { id: 'IN:5', label: 'Input 5' },
  { id: 'IN:6', label: 'Input 6' },
  { id: 'IN:7', label: 'Input 7' },
  { id: 'IN:8', label: 'Input 8' },
  { id: 'IN:9', label: 'Input 9' },
  { id: 'IN:10', label: 'Input 10' },
  { id: 'IN:11', label: 'Input 11' },
  { id: 'IN:12', label: 'Input 12' },
  { id: 'IN:13', label: 'Input 13' },
  { id: 'IN:14', label: 'Input 14' },
  { id: 'IN:15', label: 'Input 15' },
  { id: 'IN:16', label: 'Input 16' },
  { id: 'IN:17', label: 'Input 17' },
  { id: 'IN:18', label: 'Input 18' },
  { id: 'IN:19', label: 'Input 19' },
  { id: 'IN:20', label: 'Input 20' },
  { id: 'IN:21', label: 'Input 21' },
  { id: 'IN:22', label: 'Input 22' },
  { id: 'IN:23', label: 'Input 23' },
  { id: 'IN:24', label: 'Input 24' },
  { id: 'IN:25', label: 'Input 25' },
  { id: 'IN:26', label: 'Input 26' },
  { id: 'IN:27', label: 'Input 27' },
  { id: 'IN:28', label: 'Input 28' },
  { id: 'IN:29', label: 'Input 29' },
  { id: 'IN:30', label: 'Input 30' },
  { id: 'IN:31', label: 'Input 31' },
  { id: 'IN:32', label: 'Input 32' },
  { id: 'IN:33', label: 'Input 33' },
  { id: 'IN:34', label: 'Input 34' },
  { id: 'IN:35', label: 'Input 35' },
  { id: 'IN:36', label: 'Input 36' }
]

const mediastores = [
  { id: 'MS:1', label: 'MediaStore 1' },
  { id: 'MS:2', label: 'MediaStore 2' },
  { id: 'MS:3', label: 'MediaStore 3' },
  { id: 'MS:4', label: 'MediaStore 4' }
]

const auxes = [
  { id: 'AUX:1', label: 'AUX 1' },
  { id: 'AUX:2', label: 'AUX 2' },
  { id: 'AUX:3', label: 'AUX 3' },
  { id: 'AUX:4', label: 'AUX 4' },
  { id: 'AUX:5', label: 'AUX 5' },
  { id: 'AUX:6', label: 'AUX 6' },
  { id: 'AUX:7', label: 'AUX 7' },
  { id: 'AUX:8', label: 'AUX 8' },
  { id: 'AUX:9', label: 'AUX 9' },
  { id: 'AUX:10', label: 'AUX 10' },
  { id: 'AUX:11', label: 'AUX 11' },
  { id: 'AUX:12', label: 'AUX 12' },
  { id: 'AUX:13', label: 'AUX 13' },
  { id: 'AUX:14', label: 'AUX 14' },
  { id: 'AUX:15', label: 'AUX 15' },
  { id: 'AUX:16', label: 'AUX 16' }
]

const internal = [
  { id: 'BK', label: 'Black' },
  { id: 'BG', label: 'Background' }
]

const sources = [
  ...internal,
  ...inputs,
  ...mediastores,
  ...auxes
]

export { sources, internal, auxes, mediastores, inputs, meSources, mes }