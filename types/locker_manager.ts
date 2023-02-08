export type LockerManager = {
  "version": "0.1.0",
  "name": "locker_manager",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addWhitelist",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        },
        {
          "name": "entry",
          "type": {
            "defined": "WhitelistEntry"
          }
        }
      ]
    },
    {
      "name": "removeWhitelist",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        },
        {
          "name": "entry",
          "type": {
            "defined": "WhitelistEntry"
          }
        }
      ]
    },
    {
      "name": "setAuthority",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        },
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createLocker",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositorAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "beneficiary",
          "type": "publicKey"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        },
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "startTs",
          "type": "i64"
        },
        {
          "name": "endTs",
          "type": "i64"
        },
        {
          "name": "periodCount",
          "type": "u64"
        },
        {
          "name": "rewardKepper",
          "type": {
            "option": {
              "defined": "RewardKeeper"
            }
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "token",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawToWhitelist",
      "accounts": [
        {
          "name": "transfer",
          "accounts": [
            {
              "name": "lockerManagerInfo",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "whitelistedProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "locker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lockerVaultAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVaultAuthority",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "instructionData",
          "type": "bytes"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositFromWhitelist",
      "accounts": [
        {
          "name": "transfer",
          "accounts": [
            {
              "name": "lockerManagerInfo",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "whitelistedProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "locker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lockerVaultAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVaultAuthority",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "instructionData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "availableForWithdrawal",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "lockerManagerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The key with the ability to change the whitelist."
            ],
            "type": "publicKey"
          },
          {
            "name": "whitelist",
            "docs": [
              "List of programs locked tokens can be sent to. These programs",
              "are completely trusted to maintain the locked property."
            ],
            "type": {
              "vec": {
                "defined": "WhitelistEntry"
              }
            }
          }
        ]
      }
    },
    {
      "name": "locker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "docs": [
              "The owner of this Locker account."
            ],
            "type": "publicKey"
          },
          {
            "name": "mint",
            "docs": [
              "The mint of the SPL token locked up."
            ],
            "type": "publicKey"
          },
          {
            "name": "vault",
            "docs": [
              "Address of the account's token vault."
            ],
            "type": "publicKey"
          },
          {
            "name": "grantor",
            "docs": [
              "The owner of the token account funding this account."
            ],
            "type": "publicKey"
          },
          {
            "name": "currentBalance",
            "docs": [
              "The current balance of this locker account. All",
              "withdrawals will deduct this balance."
            ],
            "type": "u64"
          },
          {
            "name": "startBalance",
            "docs": [
              "The starting balance of this locker account, i.e., how much was",
              "originally deposited."
            ],
            "type": "u64"
          },
          {
            "name": "createdTs",
            "docs": [
              "The unix timestamp at which this locker account was created."
            ],
            "type": "i64"
          },
          {
            "name": "startTs",
            "docs": [
              "The time at which locker begins."
            ],
            "type": "i64"
          },
          {
            "name": "endTs",
            "docs": [
              "The time at which all tokens are vested."
            ],
            "type": "i64"
          },
          {
            "name": "periodCount",
            "docs": [
              "The number of times locker will occur. For example, if locker",
              "is once a year over seven years, this will be 7."
            ],
            "type": "u64"
          },
          {
            "name": "whitelistOwned",
            "docs": [
              "The amount of tokens in custody of whitelisted programs."
            ],
            "type": "u64"
          },
          {
            "name": "nonce",
            "docs": [
              "Signer nonce."
            ],
            "type": "u8"
          },
          {
            "name": "rewardKeeper",
            "docs": [
              "The program that determines when the locked account is **realeased**.",
              "In addition to the locker schedule, the program provides the ability",
              "for applications to determine when locked tokens are considered earned.",
              "For example, when earning locked tokens via the staking program, one",
              "cannot receive the tokens until unstaking. As a result, if one never",
              "unstakes, one would never actually receive the locked tokens."
            ],
            "type": {
              "option": {
                "defined": "RewardKeeper"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "RewardKeeper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "program",
            "docs": [
              "Program to invoke to check a realization condition. This program must",
              "implement the `ReleaseLock` trait."
            ],
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "docs": [
              "Address of an arbitrary piece of metadata interpretable by the realizor",
              "program. For example, when a locker account is allocated, the program",
              "can define its realization condition as a function of some account",
              "state. The metadata is the address of that account.",
              "",
              "In the case of staking, the metadata is a `Member` account address. When",
              "the realization condition is checked, the staking program will check the",
              "`Member` account defined by the `metadata` has no staked tokens."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "WhitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTimestamp",
      "msg": "Locker end must be greater than the current unix timestamp."
    },
    {
      "code": 6001,
      "name": "InvalidPeriod",
      "msg": "The number of locker periods must be greater than zero."
    },
    {
      "code": 6002,
      "name": "InvalidDepositAmount",
      "msg": "The locker deposit amount must be greater than zero."
    },
    {
      "code": 6003,
      "name": "InvalidWhitelistEntry",
      "msg": "The Whitelist entry is not a valid program address."
    },
    {
      "code": 6004,
      "name": "InvalidProgramAddress",
      "msg": "Invalid program address. Did you provide the correct nonce?"
    },
    {
      "code": 6005,
      "name": "InvalidVaultOwner",
      "msg": "Invalid vault owner."
    },
    {
      "code": 6006,
      "name": "InvalidVaultAmount",
      "msg": "Vault amount must be zero."
    },
    {
      "code": 6007,
      "name": "InsufficientWithdrawalBalance",
      "msg": "Insufficient withdrawal balance."
    },
    {
      "code": 6008,
      "name": "WhitelistFull",
      "msg": "Whitelist is full"
    },
    {
      "code": 6009,
      "name": "WhitelistEntryAlreadyExists",
      "msg": "Whitelist entry already exists"
    },
    {
      "code": 6010,
      "name": "InsufficientWhitelistDepositAmount",
      "msg": "Balance must go up when performing a whitelist deposit"
    },
    {
      "code": 6011,
      "name": "WhitelistDepositOverflow",
      "msg": "Cannot deposit more than withdrawn"
    },
    {
      "code": 6012,
      "name": "WhitelistWithdrawLimit",
      "msg": "Tried to withdraw over the specified limit"
    },
    {
      "code": 6013,
      "name": "WhitelistEntryNotFound",
      "msg": "Whitelist entry not found."
    },
    {
      "code": 6014,
      "name": "Unauthorized",
      "msg": "You do not have sufficient permissions to perform this action."
    },
    {
      "code": 6015,
      "name": "UnableToWithdrawWhileStaked",
      "msg": "You are unable to release projected rewards until unstaking."
    },
    {
      "code": 6016,
      "name": "InvalidLockKeeper",
      "msg": "The given lock keeper doesn't match the locker account."
    },
    {
      "code": 6017,
      "name": "UnreleasedLocker",
      "msg": "You have not released this locker account."
    },
    {
      "code": 6018,
      "name": "InvalidSchedule",
      "msg": "Invalid locker schedule given."
    }
  ]
};

export const IDL: LockerManager = {
  "version": "0.1.0",
  "name": "locker_manager",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addWhitelist",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        },
        {
          "name": "entry",
          "type": {
            "defined": "WhitelistEntry"
          }
        }
      ]
    },
    {
      "name": "removeWhitelist",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        },
        {
          "name": "entry",
          "type": {
            "defined": "WhitelistEntry"
          }
        }
      ]
    },
    {
      "name": "setAuthority",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockerManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lockerManagerNonce",
          "type": "u64"
        },
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createLocker",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositorAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "beneficiary",
          "type": "publicKey"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        },
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "startTs",
          "type": "i64"
        },
        {
          "name": "endTs",
          "type": "i64"
        },
        {
          "name": "periodCount",
          "type": "u64"
        },
        {
          "name": "rewardKepper",
          "type": {
            "option": {
              "defined": "RewardKeeper"
            }
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "token",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawToWhitelist",
      "accounts": [
        {
          "name": "transfer",
          "accounts": [
            {
              "name": "lockerManagerInfo",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "whitelistedProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "locker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lockerVaultAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVaultAuthority",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "instructionData",
          "type": "bytes"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositFromWhitelist",
      "accounts": [
        {
          "name": "transfer",
          "accounts": [
            {
              "name": "lockerManagerInfo",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "whitelistedProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "locker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lockerVaultAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "whitelistedProgramVaultAuthority",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "instructionData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "availableForWithdrawal",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "lockerManagerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The key with the ability to change the whitelist."
            ],
            "type": "publicKey"
          },
          {
            "name": "whitelist",
            "docs": [
              "List of programs locked tokens can be sent to. These programs",
              "are completely trusted to maintain the locked property."
            ],
            "type": {
              "vec": {
                "defined": "WhitelistEntry"
              }
            }
          }
        ]
      }
    },
    {
      "name": "locker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "docs": [
              "The owner of this Locker account."
            ],
            "type": "publicKey"
          },
          {
            "name": "mint",
            "docs": [
              "The mint of the SPL token locked up."
            ],
            "type": "publicKey"
          },
          {
            "name": "vault",
            "docs": [
              "Address of the account's token vault."
            ],
            "type": "publicKey"
          },
          {
            "name": "grantor",
            "docs": [
              "The owner of the token account funding this account."
            ],
            "type": "publicKey"
          },
          {
            "name": "currentBalance",
            "docs": [
              "The current balance of this locker account. All",
              "withdrawals will deduct this balance."
            ],
            "type": "u64"
          },
          {
            "name": "startBalance",
            "docs": [
              "The starting balance of this locker account, i.e., how much was",
              "originally deposited."
            ],
            "type": "u64"
          },
          {
            "name": "createdTs",
            "docs": [
              "The unix timestamp at which this locker account was created."
            ],
            "type": "i64"
          },
          {
            "name": "startTs",
            "docs": [
              "The time at which locker begins."
            ],
            "type": "i64"
          },
          {
            "name": "endTs",
            "docs": [
              "The time at which all tokens are vested."
            ],
            "type": "i64"
          },
          {
            "name": "periodCount",
            "docs": [
              "The number of times locker will occur. For example, if locker",
              "is once a year over seven years, this will be 7."
            ],
            "type": "u64"
          },
          {
            "name": "whitelistOwned",
            "docs": [
              "The amount of tokens in custody of whitelisted programs."
            ],
            "type": "u64"
          },
          {
            "name": "nonce",
            "docs": [
              "Signer nonce."
            ],
            "type": "u8"
          },
          {
            "name": "rewardKeeper",
            "docs": [
              "The program that determines when the locked account is **realeased**.",
              "In addition to the locker schedule, the program provides the ability",
              "for applications to determine when locked tokens are considered earned.",
              "For example, when earning locked tokens via the staking program, one",
              "cannot receive the tokens until unstaking. As a result, if one never",
              "unstakes, one would never actually receive the locked tokens."
            ],
            "type": {
              "option": {
                "defined": "RewardKeeper"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "RewardKeeper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "program",
            "docs": [
              "Program to invoke to check a realization condition. This program must",
              "implement the `ReleaseLock` trait."
            ],
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "docs": [
              "Address of an arbitrary piece of metadata interpretable by the realizor",
              "program. For example, when a locker account is allocated, the program",
              "can define its realization condition as a function of some account",
              "state. The metadata is the address of that account.",
              "",
              "In the case of staking, the metadata is a `Member` account address. When",
              "the realization condition is checked, the staking program will check the",
              "`Member` account defined by the `metadata` has no staked tokens."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "WhitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTimestamp",
      "msg": "Locker end must be greater than the current unix timestamp."
    },
    {
      "code": 6001,
      "name": "InvalidPeriod",
      "msg": "The number of locker periods must be greater than zero."
    },
    {
      "code": 6002,
      "name": "InvalidDepositAmount",
      "msg": "The locker deposit amount must be greater than zero."
    },
    {
      "code": 6003,
      "name": "InvalidWhitelistEntry",
      "msg": "The Whitelist entry is not a valid program address."
    },
    {
      "code": 6004,
      "name": "InvalidProgramAddress",
      "msg": "Invalid program address. Did you provide the correct nonce?"
    },
    {
      "code": 6005,
      "name": "InvalidVaultOwner",
      "msg": "Invalid vault owner."
    },
    {
      "code": 6006,
      "name": "InvalidVaultAmount",
      "msg": "Vault amount must be zero."
    },
    {
      "code": 6007,
      "name": "InsufficientWithdrawalBalance",
      "msg": "Insufficient withdrawal balance."
    },
    {
      "code": 6008,
      "name": "WhitelistFull",
      "msg": "Whitelist is full"
    },
    {
      "code": 6009,
      "name": "WhitelistEntryAlreadyExists",
      "msg": "Whitelist entry already exists"
    },
    {
      "code": 6010,
      "name": "InsufficientWhitelistDepositAmount",
      "msg": "Balance must go up when performing a whitelist deposit"
    },
    {
      "code": 6011,
      "name": "WhitelistDepositOverflow",
      "msg": "Cannot deposit more than withdrawn"
    },
    {
      "code": 6012,
      "name": "WhitelistWithdrawLimit",
      "msg": "Tried to withdraw over the specified limit"
    },
    {
      "code": 6013,
      "name": "WhitelistEntryNotFound",
      "msg": "Whitelist entry not found."
    },
    {
      "code": 6014,
      "name": "Unauthorized",
      "msg": "You do not have sufficient permissions to perform this action."
    },
    {
      "code": 6015,
      "name": "UnableToWithdrawWhileStaked",
      "msg": "You are unable to release projected rewards until unstaking."
    },
    {
      "code": 6016,
      "name": "InvalidLockKeeper",
      "msg": "The given lock keeper doesn't match the locker account."
    },
    {
      "code": 6017,
      "name": "UnreleasedLocker",
      "msg": "You have not released this locker account."
    },
    {
      "code": 6018,
      "name": "InvalidSchedule",
      "msg": "Invalid locker schedule given."
    }
  ]
};
