export type PoolManager = {
  "version": "0.1.0",
  "name": "pool_manager",
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
          "name": "lockerManagerProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardKeeperProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolManagerInfo",
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
          "name": "poolManagerNonce",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setLockerManager",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolManagerNonce",
          "type": "u64"
        },
        {
          "name": "lockerManagerProgram",
          "type": "publicKey"
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
          "name": "poolManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolManagerNonce",
          "type": "u64"
        },
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "authority",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "withdrawalTimelock",
          "type": "i64"
        },
        {
          "name": "stakeRate",
          "type": "u64"
        },
        {
          "name": "rewardQLen",
          "type": "u32"
        }
      ]
    },
    {
      "name": "updatePool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "withdrawalTimelock",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "createStaker",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
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
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateStaker",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "metadata",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "updateStakerVault",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVault",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateStakerVaultLocked",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultLocked",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "staker",
          "isMut": false,
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
      "name": "depositFromLocker",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lockerVault",
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
          "name": "stakerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakerVault",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "startUnstake",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingWithdrawal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakerVault",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
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
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "locked",
          "type": "bool"
        }
      ]
    },
    {
      "name": "endUnstake",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pendingWithdrawal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPendingWithdrawal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
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
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
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
      "name": "withdrawToLocker",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lockerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockerVaultAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolManagerInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "dropReward",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarderVault",
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
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "kind",
          "type": {
            "defined": "RewarderKind"
          }
        },
        {
          "name": "total",
          "type": "u64"
        },
        {
          "name": "expiryTs",
          "type": "i64"
        },
        {
          "name": "expiryReceiver",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "pool",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "staker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "stakerVaultPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "stakerVaultLockedPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarderVaultAuthority",
              "isMut": false,
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
          ]
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewardToLocker",
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "pool",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "staker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "stakerVaultPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "stakerVaultLockedPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarderVaultAuthority",
              "isMut": false,
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
          ]
        },
        {
          "name": "poolManagerInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lockerManagerProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardKeeperProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolManagerNonce",
          "type": "u64"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "expireReward",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarderVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "expiryReceiver",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "expiryReceiverToken",
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
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "poolManagerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "lockerManagerProgram",
            "type": "publicKey"
          },
          {
            "name": "rewardKeeperProgram",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Priviledged account."
            ],
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce to derive the program-derived address owning the vaults."
            ],
            "type": "u8"
          },
          {
            "name": "withdrawalTimelock",
            "docs": [
              "Number of seconds that must pass for a withdrawal to complete."
            ],
            "type": "i64"
          },
          {
            "name": "rewardEventQ",
            "docs": [
              "Global event queue for reward rewardering."
            ],
            "type": "publicKey"
          },
          {
            "name": "mint",
            "docs": [
              "Mint of the tokens that can be staked."
            ],
            "type": "publicKey"
          },
          {
            "name": "poolMint",
            "docs": [
              "Staking pool token mint."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakeRate",
            "docs": [
              "The amount of tokens (not decimal) that must be staked to get a single",
              "staking pool token."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "staker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool the staker belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "beneficiary",
            "docs": [
              "The effective owner of the Staker account."
            ],
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "docs": [
              "Arbitrary metadata account owned by any program."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakerVault",
            "docs": [
              "Sets of vault owned by the Staker."
            ],
            "type": {
              "defined": "StakerVault"
            }
          },
          {
            "name": "stakerVaultLocked",
            "docs": [
              "Locked vaults owned by the Staker."
            ],
            "type": {
              "defined": "StakerVault"
            }
          },
          {
            "name": "rewardsCursor",
            "docs": [
              "Next position in the rewards event queue to process."
            ],
            "type": "u32"
          },
          {
            "name": "lastStakeTs",
            "docs": [
              "The clock timestamp of the last time this account staked or switched",
              "entities. Used as a proof to reward rewarders that the Staker account",
              "was staked at a given point in time."
            ],
            "type": "i64"
          },
          {
            "name": "nonce",
            "docs": [
              "Signer nonce."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pendingWithdrawal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool this account belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "staker",
            "docs": [
              "Staker this account belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "burned",
            "docs": [
              "One time token. True if the withdrawal has been completed."
            ],
            "type": "bool"
          },
          {
            "name": "poolMint",
            "docs": [
              "The pool being withdrawn from."
            ],
            "type": "publicKey"
          },
          {
            "name": "startTs",
            "docs": [
              "Unix timestamp when this account was initialized."
            ],
            "type": "i64"
          },
          {
            "name": "endTs",
            "docs": [
              "Timestamp when the pending withdrawal completes."
            ],
            "type": "i64"
          },
          {
            "name": "amount",
            "docs": [
              "The number of tokens redeemed from the staking pool."
            ],
            "type": "u64"
          },
          {
            "name": "locked",
            "docs": [
              "True if the withdrawal applies to locked balances."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "rewardQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "head",
            "type": "u32"
          },
          {
            "name": "tail",
            "type": "u32"
          },
          {
            "name": "events",
            "type": {
              "vec": {
                "defined": "RewardEvent"
              }
            }
          }
        ]
      }
    },
    {
      "name": "rewarder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "poolTokenSupply",
            "type": "u64"
          },
          {
            "name": "rewardEventQCursor",
            "type": "u32"
          },
          {
            "name": "startTs",
            "type": "i64"
          },
          {
            "name": "expiryTs",
            "type": "i64"
          },
          {
            "name": "expiryReceiver",
            "type": "publicKey"
          },
          {
            "name": "from",
            "type": "publicKey"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "expired",
            "type": "bool"
          },
          {
            "name": "kind",
            "type": {
              "defined": "RewarderKind"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "StakerVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "vaultStaked",
            "type": "publicKey"
          },
          {
            "name": "vaultPendingWithdrawal",
            "type": "publicKey"
          },
          {
            "name": "vaultPoolToken",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "RewardEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewarder",
            "type": "publicKey"
          },
          {
            "name": "ts",
            "type": "i64"
          },
          {
            "name": "locked",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "RewarderKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unlocked"
          },
          {
            "name": "Locked",
            "fields": [
              {
                "name": "start_ts",
                "type": "i64"
              },
              {
                "name": "end_ts",
                "type": "i64"
              },
              {
                "name": "period_count",
                "type": "u64"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You do not have sufficient permissions to perform this action."
    },
    {
      "code": 6001,
      "name": "RewardQAlreadyInitialized",
      "msg": "The given reward queue has already been initialized."
    },
    {
      "code": 6002,
      "name": "InvalidNonce",
      "msg": "The nonce given doesn't derive a valid program address."
    },
    {
      "code": 6003,
      "name": "InvalidPoolMintAuthority",
      "msg": "Invalid pool mint authority"
    },
    {
      "code": 6004,
      "name": "InvalidStakerVaultAuthority",
      "msg": "Staker vault authority doesn't match the derived address."
    },
    {
      "code": 6005,
      "name": "InvalidVaultDeposit",
      "msg": "The given vault owner must match the signing depositor."
    },
    {
      "code": 6006,
      "name": "InvalidDepositor",
      "msg": "The signing depositor doesn't match either of the balance accounts"
    },
    {
      "code": 6007,
      "name": "InvalidVault",
      "msg": "The vault given does not match the vault expected."
    },
    {
      "code": 6008,
      "name": "InvalidVaultOwner",
      "msg": "Invalid vault owner."
    },
    {
      "code": 6009,
      "name": "Unknown",
      "msg": "An unknown error has occured."
    },
    {
      "code": 6010,
      "name": "UnstakeTimelock",
      "msg": "The unstake timelock has not yet expired."
    },
    {
      "code": 6011,
      "name": "InsufficientReward",
      "msg": "Reward rewarders must have at least one token unit per pool token"
    },
    {
      "code": 6012,
      "name": "InvalidExpiry",
      "msg": "Reward expiry must be after the current clock timestamp."
    },
    {
      "code": 6013,
      "name": "RewarderExpired",
      "msg": "The reward rewarder has been expired."
    },
    {
      "code": 6014,
      "name": "CursorAlreadyProcessed",
      "msg": "This reward has already been processed."
    },
    {
      "code": 6015,
      "name": "NotStakedDuringDrop",
      "msg": "The account was not staked at the time of this reward."
    },
    {
      "code": 6016,
      "name": "RewarderNotYetExpired",
      "msg": "The rewarder is not yet eligible for expiry."
    },
    {
      "code": 6017,
      "name": "RewardsNeedsProcessing",
      "msg": "Please collect your reward before otherwise using the program."
    },
    {
      "code": 6018,
      "name": "ExpectedLockedRewarder",
      "msg": "Locked reward rewarder expected but an unlocked rewarder was given."
    },
    {
      "code": 6019,
      "name": "ExpectedUnlockedRewarder",
      "msg": "Unlocked reward rewarder expected but a locked rewarder was given."
    },
    {
      "code": 6020,
      "name": "InvalidLockerVaultAuthority",
      "msg": "Locked deposit from an invalid deposit authority."
    },
    {
      "code": 6021,
      "name": "UnreleasedReward",
      "msg": "Locked rewards cannot be released until one unstaked all tokens."
    },
    {
      "code": 6022,
      "name": "InvalidBeneficiary",
      "msg": "The beneficiary doesn't match."
    },
    {
      "code": 6023,
      "name": "InvalidRewardKeeperMetadata",
      "msg": "The given staker account does not match the reward keeper metadata."
    },
    {
      "code": 6024,
      "name": "InvalidVestingSchedule",
      "msg": "Invalid locker schedule for the locked reward."
    },
    {
      "code": 6025,
      "name": "InvalidProgramAuthority",
      "msg": "Please specify the correct authority for this program."
    },
    {
      "code": 6026,
      "name": "InvalidMint",
      "msg": "Invalid mint supplied"
    }
  ]
};

export const IDL: PoolManager = {
  "version": "0.1.0",
  "name": "pool_manager",
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
          "name": "lockerManagerProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardKeeperProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolManagerInfo",
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
          "name": "poolManagerNonce",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setLockerManager",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolManagerNonce",
          "type": "u64"
        },
        {
          "name": "lockerManagerProgram",
          "type": "publicKey"
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
          "name": "poolManagerInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolManagerNonce",
          "type": "u64"
        },
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "authority",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "withdrawalTimelock",
          "type": "i64"
        },
        {
          "name": "stakeRate",
          "type": "u64"
        },
        {
          "name": "rewardQLen",
          "type": "u32"
        }
      ]
    },
    {
      "name": "updatePool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "withdrawalTimelock",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "createStaker",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
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
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateStaker",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "metadata",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "updateStakerVault",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVault",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateStakerVaultLocked",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultLocked",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "staker",
          "isMut": false,
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
      "name": "depositFromLocker",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lockerVault",
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
          "name": "stakerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakerVault",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "startUnstake",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingWithdrawal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakerVault",
          "accounts": [
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultStaked",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPendingWithdrawal",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultPoolToken",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
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
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "locked",
          "type": "bool"
        }
      ]
    },
    {
      "name": "endUnstake",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pendingWithdrawal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPendingWithdrawal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
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
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
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
      "name": "withdrawToLocker",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lockerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockerVaultAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolManagerInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "dropReward",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardEventQ",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarderVault",
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
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "kind",
          "type": {
            "defined": "RewarderKind"
          }
        },
        {
          "name": "total",
          "type": "u64"
        },
        {
          "name": "expiryTs",
          "type": "i64"
        },
        {
          "name": "expiryReceiver",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "pool",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "staker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "stakerVaultPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "stakerVaultLockedPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarderVaultAuthority",
              "isMut": false,
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
          ]
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewardToLocker",
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "pool",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "staker",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "beneficiary",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "stakerVaultPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "stakerVaultLockedPoolToken",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarderVaultAuthority",
              "isMut": false,
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
          ]
        },
        {
          "name": "poolManagerInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lockerManagerProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardKeeperProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolManagerNonce",
          "type": "u64"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "expireReward",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarderVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "expiryReceiver",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "expiryReceiverToken",
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
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "poolManagerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "lockerManagerProgram",
            "type": "publicKey"
          },
          {
            "name": "rewardKeeperProgram",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Priviledged account."
            ],
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce to derive the program-derived address owning the vaults."
            ],
            "type": "u8"
          },
          {
            "name": "withdrawalTimelock",
            "docs": [
              "Number of seconds that must pass for a withdrawal to complete."
            ],
            "type": "i64"
          },
          {
            "name": "rewardEventQ",
            "docs": [
              "Global event queue for reward rewardering."
            ],
            "type": "publicKey"
          },
          {
            "name": "mint",
            "docs": [
              "Mint of the tokens that can be staked."
            ],
            "type": "publicKey"
          },
          {
            "name": "poolMint",
            "docs": [
              "Staking pool token mint."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakeRate",
            "docs": [
              "The amount of tokens (not decimal) that must be staked to get a single",
              "staking pool token."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "staker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool the staker belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "beneficiary",
            "docs": [
              "The effective owner of the Staker account."
            ],
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "docs": [
              "Arbitrary metadata account owned by any program."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakerVault",
            "docs": [
              "Sets of vault owned by the Staker."
            ],
            "type": {
              "defined": "StakerVault"
            }
          },
          {
            "name": "stakerVaultLocked",
            "docs": [
              "Locked vaults owned by the Staker."
            ],
            "type": {
              "defined": "StakerVault"
            }
          },
          {
            "name": "rewardsCursor",
            "docs": [
              "Next position in the rewards event queue to process."
            ],
            "type": "u32"
          },
          {
            "name": "lastStakeTs",
            "docs": [
              "The clock timestamp of the last time this account staked or switched",
              "entities. Used as a proof to reward rewarders that the Staker account",
              "was staked at a given point in time."
            ],
            "type": "i64"
          },
          {
            "name": "nonce",
            "docs": [
              "Signer nonce."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pendingWithdrawal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool this account belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "staker",
            "docs": [
              "Staker this account belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "burned",
            "docs": [
              "One time token. True if the withdrawal has been completed."
            ],
            "type": "bool"
          },
          {
            "name": "poolMint",
            "docs": [
              "The pool being withdrawn from."
            ],
            "type": "publicKey"
          },
          {
            "name": "startTs",
            "docs": [
              "Unix timestamp when this account was initialized."
            ],
            "type": "i64"
          },
          {
            "name": "endTs",
            "docs": [
              "Timestamp when the pending withdrawal completes."
            ],
            "type": "i64"
          },
          {
            "name": "amount",
            "docs": [
              "The number of tokens redeemed from the staking pool."
            ],
            "type": "u64"
          },
          {
            "name": "locked",
            "docs": [
              "True if the withdrawal applies to locked balances."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "rewardQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "head",
            "type": "u32"
          },
          {
            "name": "tail",
            "type": "u32"
          },
          {
            "name": "events",
            "type": {
              "vec": {
                "defined": "RewardEvent"
              }
            }
          }
        ]
      }
    },
    {
      "name": "rewarder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "poolTokenSupply",
            "type": "u64"
          },
          {
            "name": "rewardEventQCursor",
            "type": "u32"
          },
          {
            "name": "startTs",
            "type": "i64"
          },
          {
            "name": "expiryTs",
            "type": "i64"
          },
          {
            "name": "expiryReceiver",
            "type": "publicKey"
          },
          {
            "name": "from",
            "type": "publicKey"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "expired",
            "type": "bool"
          },
          {
            "name": "kind",
            "type": {
              "defined": "RewarderKind"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "StakerVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "vaultStaked",
            "type": "publicKey"
          },
          {
            "name": "vaultPendingWithdrawal",
            "type": "publicKey"
          },
          {
            "name": "vaultPoolToken",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "RewardEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewarder",
            "type": "publicKey"
          },
          {
            "name": "ts",
            "type": "i64"
          },
          {
            "name": "locked",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "RewarderKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unlocked"
          },
          {
            "name": "Locked",
            "fields": [
              {
                "name": "start_ts",
                "type": "i64"
              },
              {
                "name": "end_ts",
                "type": "i64"
              },
              {
                "name": "period_count",
                "type": "u64"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You do not have sufficient permissions to perform this action."
    },
    {
      "code": 6001,
      "name": "RewardQAlreadyInitialized",
      "msg": "The given reward queue has already been initialized."
    },
    {
      "code": 6002,
      "name": "InvalidNonce",
      "msg": "The nonce given doesn't derive a valid program address."
    },
    {
      "code": 6003,
      "name": "InvalidPoolMintAuthority",
      "msg": "Invalid pool mint authority"
    },
    {
      "code": 6004,
      "name": "InvalidStakerVaultAuthority",
      "msg": "Staker vault authority doesn't match the derived address."
    },
    {
      "code": 6005,
      "name": "InvalidVaultDeposit",
      "msg": "The given vault owner must match the signing depositor."
    },
    {
      "code": 6006,
      "name": "InvalidDepositor",
      "msg": "The signing depositor doesn't match either of the balance accounts"
    },
    {
      "code": 6007,
      "name": "InvalidVault",
      "msg": "The vault given does not match the vault expected."
    },
    {
      "code": 6008,
      "name": "InvalidVaultOwner",
      "msg": "Invalid vault owner."
    },
    {
      "code": 6009,
      "name": "Unknown",
      "msg": "An unknown error has occured."
    },
    {
      "code": 6010,
      "name": "UnstakeTimelock",
      "msg": "The unstake timelock has not yet expired."
    },
    {
      "code": 6011,
      "name": "InsufficientReward",
      "msg": "Reward rewarders must have at least one token unit per pool token"
    },
    {
      "code": 6012,
      "name": "InvalidExpiry",
      "msg": "Reward expiry must be after the current clock timestamp."
    },
    {
      "code": 6013,
      "name": "RewarderExpired",
      "msg": "The reward rewarder has been expired."
    },
    {
      "code": 6014,
      "name": "CursorAlreadyProcessed",
      "msg": "This reward has already been processed."
    },
    {
      "code": 6015,
      "name": "NotStakedDuringDrop",
      "msg": "The account was not staked at the time of this reward."
    },
    {
      "code": 6016,
      "name": "RewarderNotYetExpired",
      "msg": "The rewarder is not yet eligible for expiry."
    },
    {
      "code": 6017,
      "name": "RewardsNeedsProcessing",
      "msg": "Please collect your reward before otherwise using the program."
    },
    {
      "code": 6018,
      "name": "ExpectedLockedRewarder",
      "msg": "Locked reward rewarder expected but an unlocked rewarder was given."
    },
    {
      "code": 6019,
      "name": "ExpectedUnlockedRewarder",
      "msg": "Unlocked reward rewarder expected but a locked rewarder was given."
    },
    {
      "code": 6020,
      "name": "InvalidLockerVaultAuthority",
      "msg": "Locked deposit from an invalid deposit authority."
    },
    {
      "code": 6021,
      "name": "UnreleasedReward",
      "msg": "Locked rewards cannot be released until one unstaked all tokens."
    },
    {
      "code": 6022,
      "name": "InvalidBeneficiary",
      "msg": "The beneficiary doesn't match."
    },
    {
      "code": 6023,
      "name": "InvalidRewardKeeperMetadata",
      "msg": "The given staker account does not match the reward keeper metadata."
    },
    {
      "code": 6024,
      "name": "InvalidVestingSchedule",
      "msg": "Invalid locker schedule for the locked reward."
    },
    {
      "code": 6025,
      "name": "InvalidProgramAuthority",
      "msg": "Please specify the correct authority for this program."
    },
    {
      "code": 6026,
      "name": "InvalidMint",
      "msg": "Invalid mint supplied"
    }
  ]
};
