import ConnectionProviderTCP from '../../connectionProviders/ConnectionProviderTCP'

class DeviceProviderRossCarboniteBlackPlus extends ConnectionProviderTCP {
  static providerRegistration = {
    id: 'DeviceProviderRossCarboniteBlackPlus',
    label: 'Carbonite Black Plus',
    manufacturer: 'Ross Video',
    protocol: 'RossTalk',
    description: 'Carbonite Black Plus is a 2RU signal processing champion. On top of the Carbonite Black feature set, every input has dedicated Frame Synchronizers, Format Converters, Color Correctors and Proc Amps. Carbonite Black Plus also adds three more MultiViewers with dedicated monitoring outputs.',
    category: 'Vision Switcher',
    parameters: this.parameters,
    defaults: [null, 7788],
    constructor: DeviceProviderRossCarboniteBlackPlus
  }

  sources = [
    { id: 'BK', label: 'Black' },
    { id: 'PGM', label: 'Program' },
    { id: 'PV', label: 'Preview' },
    { id: 'CLN', label: 'Clean' },
    { id: 'BG', label: 'Background' },
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
    { id: 'IN:36', label: 'Input 36' },
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
    { id: 'AUX:16', label: 'AUX 16' },
    { id: 'MS:1', label: 'Media Store 1' },
    { id: 'MS:2', label: 'Media Store 2' },
    { id: 'MS:3', label: 'Media Store 3' },
    { id: 'MS:4', label: 'Media Store 4' },
    { id: 'ME:1:BG', label: 'ME1 Background' },
    { id: 'ME:2:BG', label: 'ME2 Background' },
    { id: 'ME:3:BG', label: 'ME3 Background' },
    { id: 'ME:1:CLN', label: 'ME1 Clean' },
    { id: 'ME:2:CLN', label: 'ME2 Clean' },
    { id: 'ME:3:CLN', label: 'ME3 Clean' },
    { id: 'ME:1:PST', label: 'ME1 Preset' },
    { id: 'ME:2:PST', label: 'ME2 Preset' },
    { id: 'ME:3:PST', label: 'ME3 Preset' },
    { id: 'ME:1:PV', label: 'ME1 Preview' },
    { id: 'ME:2:PV', label: 'ME2 Preview' },
    { id: 'ME:3:PV', label: 'ME3 Preview' },
    { id: 'ME:1:PGM', label: 'ME1 Program' },
    { id: 'ME:2:PGM', label: 'ME2 Program' },
    { id: 'ME:3:PGM', label: 'ME3 Program' },
    { id: 'ME:1:K:1:V', label: 'ME1 Key 1 Video' },
    { id: 'ME:1:K:2:V', label: 'ME1 Key 2 Video' },
    { id: 'ME:1:K:3:V', label: 'ME1 Key 3 Video' },
    { id: 'ME:1:K:4:V', label: 'ME1 Key 4 Video' },
    { id: 'ME:2:K:1:V', label: 'ME2 Key 1 Video' },
    { id: 'ME:2:K:2:V', label: 'ME2 Key 2 Video' },
    { id: 'ME:2:K:3:V', label: 'ME2 Key 3 Video' },
    { id: 'ME:2:K:4:V', label: 'ME2 Key 4 Video' },
    { id: 'ME:3:K:1:V', label: 'ME3 Key 1 Video' },
    { id: 'ME:3:K:2:V', label: 'ME3 Key 2 Video' },
    { id: 'ME:3:K:3:V', label: 'ME3 Key 3 Video' },
    { id: 'ME:3:K:4:V', label: 'ME3 Key 4 Video' },
    { id: 'ME:1:K:1:A', label: 'ME1 Key 1 Alpha' },
    { id: 'ME:1:K:2:A', label: 'ME1 Key 2 Alpha' },
    { id: 'ME:1:K:3:A', label: 'ME1 Key 3 Alpha' },
    { id: 'ME:1:K:4:A', label: 'ME1 Key 4 Alpha' },
    { id: 'ME:2:K:1:A', label: 'ME2 Key 1 Alpha' },
    { id: 'ME:2:K:2:A', label: 'ME2 Key 2 Alpha' },
    { id: 'ME:2:K:3:A', label: 'ME2 Key 3 Alpha' },
    { id: 'ME:2:K:4:A', label: 'ME2 Key 4 Alpha' },
    { id: 'ME:3:K:1:A', label: 'ME3 Key 1 Alpha' },
    { id: 'ME:3:K:2:A', label: 'ME3 Key 2 Alpha' },
    { id: 'ME:3:K:3:A', label: 'ME3 Key 3 Alpha' },
    { id: 'ME:3:K:4:A', label: 'ME3 Key 4 Alpha' },
    { id: 'ME:1:MW', label: 'ME1 MediaWipe' },
    { id: 'ME:2:MW', label: 'ME2 MediaWipe' },
    { id: 'ME:3:MW', label: 'ME3 MediaWipe' },
    { id: 'ME:1:MWA', label: 'ME1 MediaWipe Alpha' },
    { id: 'ME:2:MWA', label: 'ME2 MediaWipe Alpha' },
    { id: 'ME:3:MWA', label: 'ME3 MediaWipe Alpha' },
    { id: 'MME:1:PGM', label: 'MiniME1 PGM' },
    { id: 'MME:2:PGM', label: 'MiniME2 PGM' },
    { id: 'MME:3:PGM', label: 'MiniME3 PGM' },
    { id: 'MME:4:PGM', label: 'MiniME4 PGM' },
    { id: 'MME:1:PV', label: 'MiniME1 Preview' },
    { id: 'MME:2:PV', label: 'MiniME2 Preview' },
    { id: 'MME:3:PV', label: 'MiniME3 Preview' },
    { id: 'MME:4:PV', label: 'MiniME4 Preview' },
    { id: 'MME:1:PV', label: 'MiniME1 Preview' },
    { id: 'MME:2:PST', label: 'MiniME2 Preset' },
    { id: 'MME:3:PST', label: 'MiniME3 Preset' },
    { id: 'MME:4:PST', label: 'MiniME4 Preset' }
  ]

  destinations = [
    { id: 'ME:1:PGM', label: 'ME1 PGM' },
    { id: 'ME:1:PST', label: 'ME1 PST' },
    { id: 'ME:2:PGM', label: 'ME2 PGM' },
    { id: 'ME:2:PST', label: 'ME2 PGM' },
    { id: 'ME:3:PGM', label: 'ME3 PGM' },
    { id: 'ME:3:PST', label: 'ME3 PGM' },
    { id: 'MME:1', label: 'MiniME1 PGM' },
    { id: 'MME:2', label: 'MiniME2 PGM' },
    { id: 'MME:3', label: 'MiniME3 PGM' },
    { id: 'MME:4', label: 'MiniME4 PGM' },
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

  outputs = [
    { id: 'OUT:1', label: 'Output 1' },
    { id: 'OUT:2', label: 'Output 2' },
    { id: 'OUT:3', label: 'Output 3' },
    { id: 'OUT:4', label: 'Output 4' },
    { id: 'OUT:5', label: 'Output 5' },
    { id: 'OUT:6', label: 'Output 6' },
    { id: 'OUT:7', label: 'Output 7' },
    { id: 'OUT:8', label: 'Output 8' },
    { id: 'OUT:9', label: 'Output 9' },
    { id: 'OUT:10', label: 'Output 10' },
    { id: 'OUT:11', label: 'Output 11' },
    { id: 'OUT:12', label: 'Output 12' },
    { id: 'OUT:13', label: 'Output 13' },
    { id: 'OUT:14', label: 'Output 14' },
    { id: 'OUT:15', label: 'Output 15' },
    { id: 'OUT:16', label: 'Output 16' },
    { id: 'OUT:17', label: 'Output 17' },
    { id: 'OUT:18', label: 'Output 18' },
    { id: 'OUT:19', label: 'Output 19' },
    { id: 'OUT:20', label: 'Output 20' },
    { id: 'OUT:21', label: 'Output 21' },
    { id: 'OUT:22', label: 'Output 22' }
  ]

  mes = [
    { id: 'ME:1', label: 'ME1' },
    { id: 'ME:2', label: 'ME2' },
    { id: 'ME:3', label: 'ME3' },
    { id: 'MME:1', label: 'MiniME1' },
    { id: 'MME:2', label: 'MiniME2' },
    { id: 'MME:3', label: 'MiniME3' },
    { id: 'MME:4', label: 'MiniME4' }
  ]

  providerFunctions = [
    {
      id: 'XPT',
      label: 'Crosspoint',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'dst',
          label: 'Bus',
          required: true,
          items: this.destinations,
          placeholder: 'Crosspoint Bus'
        },
        {
          inputType: 'comboBox',
          id: 'src',
          label: 'Cource',
          required: true,
          items: this.sources,
          placeholder: 'Source ID'
        }
      ]
    },
    {
      id: 'CC',
      label: 'Custom Control',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'bank',
          label: 'Bank',
          required: true,
          placeholder: 'Bank',
          invalidText: 'Please enter a valid Bank ID'
        },
        {
          inputType: 'numberInput',
          id: 'cc',
          label: 'CC',
          required: true,
          placeholder: 'CC',
          invalidText: 'Please enter a valid CC ID'
        }
      ]
    },
    {
      id: 'GPI',
      label: 'GPI',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'gpi',
          label: 'GPI ID',
          required: true,
          placeholder: 'GPI',
          invalidText: 'Please enter a valid GPI ID'
        }
      ]
    },
    {
      id: 'FTB',
      label: 'Fade To Black'
    },
    {
      id: 'KEYAUTO',
      label: 'Key Auto',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: this.mes,
          placeholder: 'ME Bus'
        },
        {
          inputType: 'numberInput',
          id: 'key',
          label: 'Key',
          required: true,
          placeholder: 'Key',
          invalidText: 'Please enter a valid Key ID',
          min: 1,
          max: 4
        }
      ]
    },
    {
      id: 'MV',
      label: 'Multiview PIP',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'head',
          label: 'Multiview Head',
          required: true,
          items: [
            { id: 'VP:1', label: 'Multiview 1 (Video Processor)' },
            { id: 'VP:2', label: 'Multiview 2 (Video Processor)' },
            { id: 'OP:1', label: 'Multiview 3 (I/O)' },
            { id: 'OP:2', label: 'Multiview 4 (I/O)' },
            { id: 'OP:3', label: 'Multiview 5 (I/O)' }
          ],
          placeholder: 'Multiview Head'
        },
        {
          inputType: 'numberInput',
          id: 'pip',
          label: 'PIP',
          required: true,
          placeholder: 'PIP',
          invalidText: 'Please enter a valid PIP ID',
          min: 1,
          max: 16
        },
        {
          inputType: 'comboBox',
          id: 'src',
          label: 'Source',
          required: true,
          items: [...this.sources, ...this.outputs],
          placeholder: 'Video Source'
        }
      ]
    }
  ]

  interface = (_action) => {
    console.log(_action)
    let command
    switch (_action.providerFunction.id) {
      case 'XPT': // XPT
        command = `XPT ${_action.parameters.dst.id}:${_action.parameters.src.id}`
        break
      case 'CC': // Custom Control
        command = `CC ${_action.parameters.bank}:${_action.parameters.cc}`
        break
      case 'GPI': // GPI
        command = `GPI ${_action.parameters.gpi}`
        break
      case 'FTB': // FTB
        command = 'FTB'
        break
      case 'KEYAUTO': // Custom Control
        command = `KEYAUTO ${_action.parameters.me.id}:${_action.parameters.key}`
        break
      case 'MV': // Custom Control
        command = `MV ${_action.parameters.head.id}:${_action.parameters.pip}:${_action.parameters.src.id}`
        break
    }
    console.log(command)
    this.connectionProviderInterface({
      message: `${command}\r\n`
    })
  }
}

export default DeviceProviderRossCarboniteBlackPlus
