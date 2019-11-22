export default {
    CANNOT_TRANSITION_ADDRESSES_WITH_ZERO_BALANCE:
        'Cannot peform a snapshot transition if all addresses have zero balance.',
    ADDRESS_ALREADY_ATTACHED: 'Address already attached.',
    KEY_REUSE: 'Key reuse detected. One or more of the input addresses have been spent from.',
    NOT_ENOUGH_BALANCE: 'Insufficient balance to send the transfer.',
    ADDRESS_HAS_PENDING_TRANSFERS:
        'The input addresses have pending outgoing transfers. Confirm them before trying again.',
    FUNDS_AT_SPENT_ADDRESSES: 'Warning. Funds detected on a spent address.',
    CANNOT_SEND_TO_OWN_ADDRESS: 'Cannot send to an address used as an input in the bundle.',
    POW_FUNCTION_UNDEFINED: 'Proof of work function is undefined.',
    DIGEST_FUNCTION_UNDEFINED: 'Digest function is undefined.',
    BUNDLE_NO_LONGER_VALID: 'The bundle you are retrying is no longer valid.',
    PERSISTOR_UNDEFINED: 'Persistor is undefined.',
    ATTACH_TO_TANGLE_UNAVAILABLE: 'Remote Proof of Work is not available on the selected node.',
    COMMAND_UNKNOWN: (command) => `Command ${command} is unknown.`,
    TRANSACTION_ALREADY_CONFIRMED: 'The transaction you are retrying has already confirmed.',
    INCOMING_TRANSFERS: 'Incoming transfers to all selected input addresses.',
    NODE_NOT_SYNCED: 'The selected node is out of sync. Its view of the Tangle may be innacurate.',
    NODE_NOT_SYNCED_BY_TIMESTAMP:
        'The selected node is out of sync by timestamp. Its view of the Tangle may be innacurate.',
    UNSUPPORTED_NODE: 'The currently selected node uses an unsupported IRI version.',
    INVALID_BUNDLE: 'The bundle is invalid.',
    INVALID_BUNDLE_CONSTRUCTED_WITH_REMOTE_POW: 'Invalid bundle constructed with remote proof-of-work.',
    INVALID_BUNDLE_CONSTRUCTED_WITH_LOCAL_POW: 'Invalid bundle constructed with local proof-of-work.',
    INVALID_PARAMETERS: 'Invalid parameters.',
    ALREADY_SPENT_FROM_ADDRESSES: 'Addresses used in this bundle have already been spent from.',
    TRANSACTION_IS_INCONSISTENT: 'The transaction you are retrying is inconsistent.',
    ADDRESS_METADATA_LENGTH_MISMATCH: 'Address metadata length mismatch.',
    SOMETHING_WENT_WRONG_DURING_INPUT_SELECTION: 'Something went wrong during input selection.',
    NO_NODE_TO_RETRY: 'No nodes are available to retry the request.',
    NOT_ENOUGH_SYNCED_NODES: 'Not enough are in sync nodes to perform a quorum.',
    COULD_NOT_GET_QUORUM_FOR_LATEST_SOLID_SUBTANGLE_MILESTONE:
        'The nodes in quorum failed to agree on the state of the Tangle.',
    METHOD_NOT_SUPPORTED_FOR_QUORUM: 'Method not supported for quorum.',
    NOT_ENOUGH_QUORUM_NODES: 'Too few nodes added to conduct a quorum of the specified size.',
    EMPTY_ADDRESS_DATA: 'Empty address data.',
    INVALID_INPUT: 'Invalid input.',
    INVALID_TRANSFER: 'Invalid transfer.',
    INVALID_ADDRESS_DATA: 'Invalid address data.',
    INVALID_LAST_TRIT: 'Last address trit is not 0.',
    CANNOT_SWEEP_TO_SAME_ADDRESS: 'Cannot sweep to same address.',
    BALANCE_MISMATCH: 'Balance mismatch.',
    PROMOTIONS_LIMIT_REACHED: 'Promotions limit reached.',
    EMPTY_BUNDLE_PROVIDED: 'Empty bundle provided.',
    EMPTY_BUNDLES_PROVIDED: 'Empty bundles provided.',
    DETECTED_INPUT_WITH_ZERO_BALANCE: 'Detected input with zero balance.',
    NO_VALID_BUNDLES_CONSTRUCTED: 'No valid bundles constructed.',
    BUNDLE_NO_LONGER_FUNDED: 'The bundle you are retrying is no longer funded.',
    INVALID_BUNDLES_PROVIDED: 'Invalid bundles provided.',
    INVALID_TRANSACTIONS_PROVIDED: 'Invalid transactions provided.',
    INCLUSION_STATES_SIZE_MISMATCH: 'Inclusion states size mismatch.',
    INPUTS_THRESHOLD_CANNOT_BE_ZERO: 'Limit for input addresses cannot be zero.',
    CANNOT_FIND_INPUTS_WITH_PROVIDED_LIMIT: 'Cannot find input addresses with provided limit.',
    INSUFFICIENT_BALANCE: 'Insufficient balance to send a transaction with the specified amount.',
    INVALID_MAX_INPUTS_PROVIDED: 'Invalid max inputs provided.',
    NO_STORED_DATA_FOUND: 'No stored data found during migration.',
    MAX_INPUTS_EXCEEDED: (count, max) =>
        `Ledger does not support transactions with ${count} input addresses. The limit is ${max}.`,
    LEDGER_ZERO_VALUE: 'Cannot send 0 value transfers with a Ledger device.',
    LEDGER_DISCONNECTED: 'Ledger device disconnected.',
    LEDGER_CANCELLED: 'Transaction cancelled on Ledger device.',
    LEDGER_DENIED: 'Ledger transaction denied by user',
    LEDGER_INVALID_INDEX: 'Incorrect Ledger device connected or the Ledger mnemonic has changed.',
    REQUEST_TIMED_OUT: 'The node took too long to respond.',
    FOUND_INVALID_SEED_IN_KEYCHAIN: 'Found an invalid seed in the keychain.',
    MISSING_FROM_KEYCHAIN: (alias) => `Missing ${alias} from keychain.`,
    EXPORT_CANCELLED: 'Export cancelled',
    MARKET_DATA_FAILURE: 'Could not fetch market data'
};
