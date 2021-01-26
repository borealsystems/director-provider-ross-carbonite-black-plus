import ConnectionProviderTCP from '../../connectionProviders/ConnectionProviderTCP'
import { sources, internal, auxes, mediastores, inputs, meSources, mes } from './io'

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

  providerFunctions = [
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
      id: 'FTB',
      label: 'Fade To Black'
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
      id: 'KEYAUTO',
      label: 'Key Auto',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
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
      id: 'KEYCUT',
      label: 'Key Cut',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
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
      id: 'KEYMODE',
      label: 'Key Mode',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
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
        },
        {
          inputType: 'comboBox',
          id: 'mode',
          label: 'Mode',
          required: true,
          items: [
            { id: 'ADDITIVE', label: 'ADDITIVE' },
            { id: 'FULL', label: 'FULL' },
            { id: 'NORMAL', label: 'NORMAL' }
          ],
          placeholder: 'Key Mode'
        },
      ]
    },

    {
      id: 'LOADSET',
      label: 'Load Set',
      parameters: [
        {
          inputType: 'textInput',
          id: 'set',
          label: 'Set Name',
          required: true,
          placeholder: 'set1'
        }
      ]
    },

    {
      id: 'SAVESET',
      label: 'Save Set',
      parameters: [
        {
          inputType: 'textInput',
          id: 'set',
          label: 'Set Name',
          required: true,
          placeholder: 'set1'
        }
      ]
    },

    {
      id: 'METRANS',
      label: 'ME Transition',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
        },
        {
          inputType: 'comboBox',
          id: 'trans',
          label: 'Transition',
          required: true,
          items: [
            { id: 'CUT', label: 'Cut'},
            { id: 'AUTO', label: 'Auto'}
          ],
          placeholder: 'Transition'
        },
      ]
    },

    {
      id: 'MEM',
      label: 'Recall Memory',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'mem',
          label: 'Memory ID',
          required: true,
          placeholder: 'Memory',
          invalidText: 'Please enter a valid memory ID',
          min: 0,
          max: 9
        },
        {
          inputType: 'multiSelect',
          id: 'bus',
          label: 'Bus',
          required: true,
          items: mes,
          placeholder: 'Included Busses'
        },
      ]
    },

    {
      id: 'MEMSAVE',
      label: 'Save Memory',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'mem',
          label: 'Memory ID',
          required: true,
          placeholder: 'Memory',
          invalidText: 'Please enter a valid memory ID',
          min: 0,
          max: 9
        },
        {
          inputType: 'multiSelect',
          id: 'bus',
          label: 'Bus',
          required: true,
          items: mes,
          placeholder: 'Included Busses'
        },
      ]
    },

    {
      id: 'MNEM',
      label: 'Set Source Mnemonic',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'source',
          label: 'Source',
          required: true,
          items: sources,
          placeholder: 'Source'
        },
        {
          inputType: 'textInput',
          id: 'mnemonic',
          label: 'Mnemonic',
          required: true,
          placeholder: 'Input 1'
        }
      ]
    },

    {
      id: 'MS',
      label: 'Load MediaStore',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'channel',
          label: 'Channel',
          required: true,
          items: [
            { id: '1', label: 'MediaStore 1'},
            { id: '2', label: 'MediaStore 2'},
            { id: '3', label: 'MediaStore 3'},
            { id: '4', label: 'MediaStore 4'}
          ],
          placeholder: 'Channel'
        },
        {
          inputType: 'comboBox',
          id: 'location',
          label: 'Media Location',
          required: true,
          items: [
            { id: 'usb', label: 'USB'},
            { id: 'internal', label: 'Internal'}
          ],
          placeholder: 'Location'
        },
        {
          inputType: 'numberInput',
          id: 'num',
          label: 'Media ID',
          required: true,
          placeholder: '1',
          invalidText: 'Please enter a valid media ID',
          min: 1
        },
      ]
    },

    {
      id: 'MVBOX',
      label: 'Multiview PIP',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'head',
          label: 'Multiview Head',
          required: true,
          items: [
            { id: '1', label: 'Multiview 1 (Video Processor)' },
            { id: '2', label: 'Multiview 2 (Video Processor)' },
            { id: '3', label: 'Multiview 3 (I/O)' },
            { id: '4', label: 'Multiview 4 (I/O)' },
            { id: '5', label: 'Multiview 5 (I/O)' }
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
          items: [...sources],  // TODO ADD OUTPUTS
          placeholder: 'Video Source'
        }
      ]
    },

    {
      id: 'TRANSINCL',
      label: 'Transition Inclusion',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
        },
        {
          inputType: 'multiSelect',
          id: 'keys',
          label: 'Inclusions',
          required: true,
          items: [
            { id: 'B', label: 'Background'},
            { id: '1', label: 'Key 1'},
            { id: '2', label: 'Key 2'},
            { id: '3', label: 'Key 3'},
            { id: '4', label: 'Key 4'}
          ],
          placeholder: 'Included Keyers'
        },
      ]
    },

    {
      id: 'TRANSRATE',
      label: 'Transition Rate',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
        },
        {
          inputType: 'numberInput',
          id: 'rate',
          label: 'Rate (Frames)',
          required: true,
          placeholder: '1',
          invalidText: 'Please enter a valid transition rate',
          min: 1
        }
      ]
    },

    {
      id: 'TRANSTYPE',
      label: 'Transition Type',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'me',
          label: 'ME',
          required: true,
          items: mes,
          placeholder: 'Bus'
        },
        {
          inputType: 'comboBox',
          id: 'type',
          label: 'Type',
          required: true,
          items: [
            { id: 'DISS', label: 'Dissolve'},
            { id: 'WIPE', label: 'Wipe'},
            { id: 'DVE', label: 'DVE'},
            { id: 'MEDIA', label: 'Media'}
          ],
          placeholder: 'Bus'
        },
      ]
    },

    {
      id: 'XPT',
      label: 'Crosspoint',
      parameters: [
        {
          inputType: 'comboBox',
          id: 'dst',
          label: 'Bus',
          required: true,
          items: [...meSources, ...auxes],
          placeholder: 'Crosspoint Bus'
        },
        {
          inputType: 'comboBox',
          id: 'src',
          label: 'Cource',
          required: true,
          items: sources,
          placeholder: 'Source ID'
        }
      ]
    }
  ]

  interface = (_action) => {
    let command
    switch (_action.providerFunction.id) {
      case 'CC': // Execute custom control.            CC <cc>
        command = `CC ${_action.parameters.bank}:${_action.parameters.cc}`
        break

      case 'FTB': // Fade to black.                     FTB
        command = 'FTB'
        break

      case 'GPI': // Trigger GPI.                       GPI <gpi>
        command = `GPI ${_action.parameters.gpi}`
        break

      case 'KEYAUTO': // Toggle key autotrans.              KEYAUTO <bus_id>:<key>
        command = `KEYAUTO ${_action.parameters.me.id}:${_action.parameters.key}`
        break
      
      case 'KEYCUT': // Toggle key cut.                    KEYCUT <bus_id>:<key>
        command = `KEYCUT ${_action.parameters.me.id}:${_action.parameters.key}`
        break
        
      case 'KEYMODE': // Switch the shaped mode of a key    KEYMODE <bus_id>:<key>:(ADDITIVE|FULL|NORMAL)
        command = `KEYMODE ${_action.parameters.me.id}:${_action.parameters.key}:${_action.parameters.mode.id}`
        break

      case 'LOADSET': // Load a set by name.                LOADSET <setname>
        command = `LOADSET ${_action.parameters.set}`
        break

      case 'SAVESET': // Save a set by name.                SAVESET <setname>
        command = `SAVESET ${_action.parameters.set}`
        break

      case 'METRANS': 
          command = `ME${_action.parameters.trans.id} ${_action.parameters.me.id}`
        break

      case 'MEM': // Execute memory recall.             MEM <mem>[:<bus_id1>[:<bus_id2>[:...]]]
        let incl = ''
        _action.parameters.bus.map(bus => {
          incl = `${incl}:${bus.id}`
        })
        command = `MEM ${_action.parameters.mem}${incl}`
        break

      case 'MEMSAVE': // Execute a memory save.             MEMSAVE <mem>[:<bus_id1>[:<bus_id2>[:...]]]
        let memincl = ''
        _action.parameters.bus.map(bus => {
          memincl = `${memincl}:${bus.id}`
        })
        command = `MEMSAVE ${_action.parameters.mem}${memincl}`
        break

      case 'MNEM': // Change mnemonic text of a source.  MNEM <src_id>:<name>
        command = `MNEM ${_action.parameters.source.id}:${_action.parameters.mnemonic}`
        break

      case 'MS': // Load from media store.             MS <channel>:<location>:<media_num>
        command = `MS ${_action.parameters.channel.id}:${_action.parameters.location.id}:${_action.parameters.num}`
        break
      
      case 'MVBOX': // Assign source to multiviewer box.  MVBOX <mv>:<box>:<src_id>
        command = `MVBOX ${_action.parameters.head.id}:${_action.parameters.pip}:${_action.parameters.src.id}`
        break
      
      case 'TRANSINCL': // Include elements in transition.    TRANSINCL <bus_id>:(B|<key>[:B|<key>[:...]])
        let transincl = ''
        console.log(_action.parameters)
        _action.parameters.keys.map(key => {
          console.log('mapping', key)
          transincl = `${transincl}:${key.id}`
        })
        console.log(`TRANSINCL ${_action.parameters.me.id}${transincl}`)
        command = `TRANSINCL ${_action.parameters.me.id}${transincl}`
        break

      case 'TRANSRATE': // Set transition rate.               TRANSRATE <bus_id>:<num_frames>
        command = `TRANSRATE ${_action.parameters.me.id}:${_action.parameters.rate}`
        break
      
      case 'TRANSTYPE': // Set transition type.               TRANSTYPE <bus_id>:(DISS|WIPE|DVE|MEDIA)
        command = `TRANSTYPE ${_action.parameters.me.id}:${_action.parameters.type.id}`
        break

      case 'XPT': // Change XPoint.                     XPT (AUX:<aux>)|(AUX:1:<aux>)|(<bus_id>:PGM|PST|KEY:<key>)):<src_id>
        command = `XPT ${_action.parameters.dst.id}:${_action.parameters.src.id}`
        break

    }
    this.connectionProviderInterface({
      message: `${command}\r\n`
    })
  }
}

export default DeviceProviderRossCarboniteBlackPlus
