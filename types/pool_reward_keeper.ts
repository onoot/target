export type PoolRewardKeeper = {
  "version": "0.1.0",
  "name": "pool_reward_keeper",
  "instructions": [
    {
      "name": "checkReleasability",
      "accounts": [
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
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
        }
      ],
      "args": [
        {
          "name": "locker",
          "type": {
            "defined": "Locker"
          }
        },
        {
          "name": "stakerData",
          "type": {
            "defined": "StakerData"
          }
        }
      ]
    }
  ],
  "types": [
    {
      "name": "StakerData",
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
            "name": "stakerVaultPoolToken",
            "docs": [
              "Sets of balances owned by the Staker."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakerVaultLockedPoolToken",
            "docs": [
              "Locked balances owned by the Staker."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
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
      "name": "Locker",
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
              "The program that determines when the locked account is **releasable**.",
              "In addition to the lockup schedule, the program provides the ability",
              "for applications to determine when locked tokens are considered earned.",
              "For example, when earning locked tokens via the staking program, one",
              "cannot receive the tokens until unstaking. As a result, if one never",
              "unstakes, one would never actually receive the locked tokens."
            ],
            "type": {
              "option": {
                "defined": "PoolRewardKeeper"
              }
            }
          }
        ]
      }
    },
    {
      "name": "PoolRewardKeeper",
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
              "Address of an arbitrary piece of metadata interpretable by the reward keeper",
              "program. For example, when a locker account is allocated, the program",
              "can define its realization condition as a function of some account",
              "state. The metadata is the address of that account.",
              "",
              "In the case of staking, the metadata is a `Staker` account address. When",
              "the realization condition is checked, the staking program will check the",
              "`Staker` account defined by the `metadata` has no staked tokens."
            ],
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnreleasedReward",
      "msg": "Locked rewards cannot be released until one unstaked all tokens."
    },
    {
      "code": 6001,
      "name": "InvalidRewardKeeperMetadata",
      "msg": "The given staker account does not match the reward keeper metadata."
    }
  ]
};

export const IDL: PoolRewardKeeper = {
  "version": "0.1.0",
  "name": "pool_reward_keeper",
  "instructions": [
    {
      "name": "checkReleasability",
      "accounts": [
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
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
        }
      ],
      "args": [
        {
          "name": "locker",
          "type": {
            "defined": "Locker"
          }
        },
        {
          "name": "stakerData",
          "type": {
            "defined": "StakerData"
          }
        }
      ]
    }
  ],
  "types": [
    {
      "name": "StakerData",
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
            "name": "stakerVaultPoolToken",
            "docs": [
              "Sets of balances owned by the Staker."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakerVaultLockedPoolToken",
            "docs": [
              "Locked balances owned by the Staker."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
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
      "name": "Locker",
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
              "The program that determines when the locked account is **releasable**.",
              "In addition to the lockup schedule, the program provides the ability",
              "for applications to determine when locked tokens are considered earned.",
              "For example, when earning locked tokens via the staking program, one",
              "cannot receive the tokens until unstaking. As a result, if one never",
              "unstakes, one would never actually receive the locked tokens."
            ],
            "type": {
              "option": {
                "defined": "PoolRewardKeeper"
              }
            }
          }
        ]
      }
    },
    {
      "name": "PoolRewardKeeper",
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
              "Address of an arbitrary piece of metadata interpretable by the reward keeper",
              "program. For example, when a locker account is allocated, the program",
              "can define its realization condition as a function of some account",
              "state. The metadata is the address of that account.",
              "",
              "In the case of staking, the metadata is a `Staker` account address. When",
              "the realization condition is checked, the staking program will check the",
              "`Staker` account defined by the `metadata` has no staked tokens."
            ],
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnreleasedReward",
      "msg": "Locked rewards cannot be released until one unstaked all tokens."
    },
    {
      "code": 6001,
      "name": "InvalidRewardKeeperMetadata",
      "msg": "The given staker account does not match the reward keeper metadata."
    }
  ]
};
